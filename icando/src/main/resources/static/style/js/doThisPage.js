let agentId = '';
let userId = '';
let agentPrice = 0;
$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    agentId = urlParams.get('agentId'); // url로 넘어온 코드 값

    $('#agentId').val(agentId);
// 의뢰인 지역 선택
    $.ajax({
        "url": "/v1/search/regionList",
        "method": "GET",
        "timeout": 0,
    }).done(function (response) {
        console.log(response);
        $('#regionCode').empty();

        response.forEach(regionList => {

            const regionName = regionList.regionName;
            const regionCode = regionList.regionCode;
            $('#regionCode').append(`
            <option value="${regionCode}">${regionName}</option>
        `);

        })

    });

    $.ajax({
        url: "/getAgentPrice",
        method: "GET",
        data: { agentId: agentId },
        success: function(response) {
            console.log(response.agentPrice);
            agentPrice = parseInt(response.agentPrice);
        },
        error: function(error) {
            console.log(error);
        }
    });

});

function totalPriceValue() {
    const workTime = parseInt(document.getElementById("workTime").value);
    const pricePerHour = agentPrice; //agent 시급

    const totalPrice = workTime * pricePerHour;

    const money = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    document.getElementById("totalPrice").value = money;
}

function uploadImage() {
    const imageFile = document.getElementById("imageFile").files[0];

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("key", "4f35fdbb8cc5afe658d7f00211493eb9");

    $.ajax({
        url: "https://api.imgbb.com/1/upload",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            alert("responseurl:"+response);
            alert("url:"+response.data.url);
            const imageUrl = response.data.url;
            // 이미지 저장소에 이미지 업로드 후 imgbb 에서 리스폰스 해준 url을
            // agentImage 값으로 저장
            document.getElementById("resImage").value = imageUrl;
            //미리보기를 위해 previewImage에 url 저장하여 저장소에 업로드후
            // 페이지에서 미리보기 기능 구현
            document.getElementById("previewImage").src = imageUrl;
            alert("이미지 업로드 완료.");
        },
        error: function (xhr, status, error) {
            alert("이미지 업로드 실패.");
            console.log(error);
        },
    });
}



function requestDoThis() {

    const agentId = $("#agentId").val();
    userId = $("#userId").val();
    const userNickname = $("#userNickname").val();
    const resTitle = $("#resTitle").val();
    const resContent = $("#resContent").val();
    const workTime = $("#workTime").val();
    const totalPrice = $("#totalPrice").val();
    const regionCode = document.getElementById("regionCode").value;
    const regionName = $('#regionCode option:selected').text();

    let url = "/doThisPage?";

    let check = true;
    if (userId !== "") {
        url += "userId=" + userId + "&";
    }
    if (agentId !== "") {
        url += "agentId=" + agentId + "&";
    }
    if (resTitle !== "") {
        url += "resTitle=" + resTitle + "&";
    }
    if (resContent !== "") {
        url += "resContent=" + resContent + "&";
    }
    if (workTime !== "") {
        url += "workTime=" + workTime + "&";
    }
    if (totalPrice !== "") {
        url += "totalPrice=" + totalPrice + "&";
    }
    if (regionName !== "") {
        url += "regionName=" + regionName + "&";
    }

    console.log(check);
    if (resTitle === "") {
        alert('제목이 입력되지 않았습니다');
        check = false;
    } else if (resContent === "") {
        alert('내용이 입력되지 않았습니다');
        check = false;
    }else if (workTime === "") {
        alert('시간이 입력되지 않았습니다');
        check = false;
    }else if (totalPrice === "") {
        alert('시간을 다시 선택하세요');
        check = false;
    }else if (regionName === "") {
        alert('지역을 다시 선택하세요');
        check = false;
    }
    if (check === false) {
        location.href = url;
    }else{

        // Ajax 요청을 통해 업데이트 처리
        $.ajax({
            "url": "writeResBoard",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({ //JSON 직렬화
                // resImage : resImage,
                agentId : agentId,
                userId : userId,
                userNickname: userNickname,
                resTitle: resTitle,
                resContent: resContent,
                workTime: workTime,
                totalPrice: totalPrice,
                checkComplete : false,
                checkApply : false,
                checkSuccess : false,
                regionCode: regionCode,
                regionName : regionName,
                changeAlram : false,
                newRequestAlram : true
            }),
            success: function(response) {

                // 업데이트 성공 시 처리 로직
                console.log("success"+check);
                console.log("등록 완료");
                agentCheckToken();


            },
            error: function(error) {
                // 업데이트 실패 시 처리 로직
                console.log("등록 오류발생");
                location.href = "/";
            }
        });
    }
}

function agentCheckToken(){
    $.ajax({
        url: "/agentTokenById",
        method: "GET",
        timeout: 0,
        "data" : {
            agentId: agentId,
        },
    }).done(function (response) {
        console.log("토큰 반환: " + response);
        alram(response);

    });

}

function alram(agentAlramToken){

    $.ajax({
        url: "/userPush" ,
        method: "POST",
        "data": {
            agentAlramToken: agentAlramToken,
        },
        success: function(response) {
            alert("의뢰요청알림");
            // userPushAlram();

            location.href = `/request-details?userId=${userId}`;
        },
        error: function(error) {
            console.log(error);
        }

    });
}


