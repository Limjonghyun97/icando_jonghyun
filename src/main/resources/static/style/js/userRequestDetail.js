let agentId = "";
let userId = "";
let resCode = "";
$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    userId = urlParams.get('userId'); // url로 넘어온 코드 값
    resCode = urlParams.get('resCode');
    agentId = urlParams.get('agentId');
    console.log("상세페이지:" + resCode);

    chengeAlram(userId);
    userPushAlram();
    $.ajax({
        url: "/yesRequestByResCode",
        method: "GET",
        data: {resCode: resCode},
        success: function (response) {
            const regionName = response.regionName;
            resCode = response.resCode;
            const userId = response.userId;
            const resTitle = response.resTitle;
            const resContent = response.resContent;
            const userNickname = response.userNickname;
            const totalPrice = response.totalPrice;
            const workTime = response.workTime;
            const checkComplete = response.checkComplete;
            const checkApply = response.checkApply;
            const checkSuccess = response.checkSuccess;
            console.log("상세totalPrice:" + totalPrice)
            const totalPrices = totalPrice.replace(/,/g, "")
            if (checkComplete === false && checkApply === false) {
                $('#status').append(`
                <h3>(에이전트가 고민중입니다.)</h3>
               `);
            } else if (checkApply === true && checkSuccess === false) {
                $('#status').append(`
                <h3>(의뢰 진행중입니다)</h3>
               `);
            } else if (checkApply === true && checkSuccess === true && checkComplete === false) {
                $('#starPointCheck').append(`
                  <div>
  <div class="form-check-inline" style="display: inline-block;   margin-right: 10px;">
    <input class="form-check-input" type="radio" name="star-rating" id="star1" value="1">
    <label class="form-check-label" for="star1">1</label>
  </div>
  <div class="form-check-inline" style="display: inline-block;   margin-right: 10px;">
    <input class="form-check-input" type="radio" name="star-rating" id="star2" value="2">
    <label class="form-check-label" for="star2">2</label>
  </div>
  <div class="form-check-inline" style="display: inline-block;   margin-right: 10px;">
    <input class="form-check-input" type="radio" name="star-rating" id="star3" value="3">
    <label class="form-check-label" for="star3">3</label>
  </div>
  <div class="form-check-inline" style="display: inline-block;   margin-right: 10px;">
    <input class="form-check-input" type="radio" name="star-rating" id="star4" value="4">
    <label class="form-check-label" for="star4">4</label>
  </div>
  <div class="form-check-inline" style="display: inline-block;   margin-right: 10px;">
    <input class="form-check-input" type="radio" name="star-rating" id="star5" value="5" checked>
    <label class="form-check-label" for="star5">5</label>
  </div>
                    </div>
                `)

                $('#yesButton').append(`
                   <input id="" type="button" value="임무완료 승인(충전금 결제)"
                        onclick="findUserCredit(${totalPrices})">
                       
                       <form method="post" action="/kakaoPay">
                       <input type="hidden" id="resCode" name="resCode" value="${resCode}">
                       <input type="hidden" id="userId" name="userId" value="${userId}">
                       <input type="hidden" id="totalPrice" name="totalPrice" value="${totalPrice}">
                       <button>카카오페이</button>
                       </form>
               `);
                $('#status').append(`
                <h3(#에이전트가 의뢰를 완료하였습니다. 확인해주세요)</h3>
               `);

            } else if (checkComplete === true) {
                $('#yesButton').append(`
                        <h3>담당 에이전트 (${agentId})</h3>
                    `);
                $('#status').append(`
                        <h3>(완료된 의뢰입니다)</h3>
                    `);
            }

            $("#regionName").val(regionName);
            $("#resCode").val(resCode);
            $("#userId").val(userId);
            $("#resTitle").val(resTitle);
            $("#resContent").val(resContent);
            $("#userNickname").val(userNickname);
            $("#totalPrice").val(totalPrice);
            $("#workTime").val(workTime);
            $("#checkApply").val(checkApply ? '수락' : '고민중');
            $("#checkSuccess").val(checkApply ? checkSuccess ? '작업완료' : '진행중' : '대기중');
            $("#checkComplete").val(checkComplete ?  '완료' : '대기중');

            console.log(totalPrice);


        },
        error: function (error) {
            console.log(error);
        }

    });
});

function chengeAlram(userId) {
    $.ajax({
        url: "/changeAlram", // 로그아웃 처리를 수행하는 URL
        method: "Get",
        "data": {
            userId : userId
        },
        success: function(response) {

            if(response > 0){
                $("#changeAlram").text(' ('+response+')');
                $("#myImg").attr("src", "/style/images/alramMy.png");

            }else{
                $("#changeAlram").hide();
                $("#myImg").attr("src", "/style/images/myImg.png");
            }
        },
        error: function(xhr, status, error) {
            console.error("데이터 로드 실패:", error);
        }
    });
}



function userPushAlram(){

    $.ajax({
        url: "/updateChangeAlram2",
        type: "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({

            resCode: resCode,
        }),
        success: function(response) {

        },
        error: function() {
            alert("수락 중 오류발생");
        }
    });
}

function findUserCredit(totalPrice) {
    console.log("totalPrice:" + totalPrice);
    if (confirm(`승인완료를 누르면 비용('${totalPrice}')원이 결제되고 의뢰가 완료됩니다.\n진행 하시겠습니까?`)) {

        $.ajax({
            url: "/userCreditById",
            method: "GET",
            data: {userId: userId},
            success: function (response) {
                if (response >= totalPrice) {
                    let userCharge = response - totalPrice;
                    $.ajax({
                        url: `/userCreditUpdate`,
                        type: "POST",
                        "headers": {
                            "Content-Type": "application/json"
                        },
                        "data": JSON.stringify({
                            userId: userId,
                            userCredit: userCharge
                        }),
                        success: function (response) {
                            completeValue();
                        },
                        error: function () {
                            alert("결제실패");
                        }
                    });

                } else {
                    alert("잔액이 부족합니다.");
                    location.href = `/moneyCharge?userId=${userId}`
                }
            },
            error: function (error) {
                console.log(error);
            }
        });
    }
}


// 상세보기에서 의뢰종료/결제하기
function completeValue() {
    resCode = $("#resCode").val();
    const starPoint = $("input[name='star-rating']:checked").val();
    console.log("결제완료업데이트시: starPoint: " + starPoint);

    $.ajax({
        url: `/updateCheckComplete`,
        type: "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            checkComplete: true,
            resCode: resCode,
            starPoint: starPoint
        }),
        success: function (response) {
            console.log("결제후 유저아이디:"+response.userId);

            alert("결제완료!\n이용해주셔서 감사합니다.");
            location.href = `/request-details?userId=${userId}`
        },
        error: function () {
            alert("수락 중 오류발생");
        }
    });
}