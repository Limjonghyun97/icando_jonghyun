
let agentId = "";
let userId = "";
let resCode = "";
$(document).ready(function() {

    const urlParams = new URLSearchParams(window.location.search);
    userId = urlParams.get('userId'); // url로 넘어온 코드 값
    resCode = urlParams.get('resCode');
    agentId = urlParams.get('agentId');

    agentCloseAlram();
    $.ajax({
        url: "/yesRequestByResCode" ,
        method: "GET",
        data: { resCode: resCode },
        success: function(response) {
            const regionName = response.regionName;
            const resCode = response.resCode;
            userId = response.userId;
            const resTitle = response.resTitle;
            const resContent = response.resContent;
            const userNickname = response.userNickname;
            const totalPrice = response.totalPrice;
            const workTime = response.workTime;
            const checkComplete = response.checkComplete;
            const checkApply = response.checkApply;
            const checkSuccess = response.checkSuccess;
            console.log(checkComplete)
            if(checkComplete === false && checkApply === false){
                $('#yesButton').append(`
                    <input id="" type="button" value="내가할게"
                       onclick="yesByRequest()">
               `);
            }else if(checkComplete === true){
                $('#status').append(`
                <h3>(이미 완료된 의뢰 내용입니다)</h3>
               `);
            }else if(checkApply === true && checkSuccess === false){
                $('#yesButton').append(`
                 <input id="" type="button" value="내가 했어"
                       onclick="successCheck()">
               `);
                $('#status').append(`
                <h3>(요청자와 협의 또는 진행중입니다)</h3>
               `);
            }else if(checkApply === true && checkSuccess === true){
                $('#status').append(`
                <h3>(요청자가 확인중입니다)</h3>
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

        },
        error: function(error) {
            console.log(error);
        }

    });
});


//의뢰 수락 업데이트
function yesByRequest(){
    $.ajax({
        url: `/updateCheckApply`,
        type: "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({

            resCode : resCode
        }),
        success: function(response) {
            alert("의뢰가 수락되었습니다. 요청자와 상세협의 후 진행하세요");
            checkToken();
        },
        error: function() {
            alert("수락 중 오류발생");
        }
    });

}
//작업 완료여부 업데이트
function successCheck(){

    $.ajax({
        url: `/updateCheckSuccess`,
        type: "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({

            resCode : resCode
        }),
        success: function(response) {
            alert("요청자에게 작업완료를 전달하였습니다. 잠시 후 확인하세요");
            checkToken();

        },
        error: function() {
            alert("수락 중 오류발생");
        }
    });

}
function checkToken(){
    $.ajax({
        url: "/userTokenById",
        method: "GET",
        timeout: 0,
        "data" : {
            userId: userId,
        },
    }).done(function (response) {
        console.log("토큰 반환: " + response);
        alram(response);

    });

}
function alram(alramToken){
    $.ajax({
        url: "/push" ,
        method: "POST",
        "data": {
            alramToken: alramToken,
        },
        success: function(response) {
            agentPushAlram();
        },
        error: function(error) {
            console.log(error);
        }

    });
}
function agentPushAlram(){
    $.ajax({
        url: "/updateChangeAlram",
        type: "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({

            resCode: resCode,
        }),
        success: function(response) {
            location.href=`/agentMypage?agentId=${agentId}`
        },
        error: function() {
            alert("수락 중 오류발생");
        }
    });
}
function agentCloseAlram(){

    $.ajax({
        url: "/updateChangeAlram3",
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


