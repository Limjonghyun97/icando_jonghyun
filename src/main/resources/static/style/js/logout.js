$(document).ready(function() {
    // 로그인 한 사람 이름
    const urlParams = new URLSearchParams(window.location.search);
    const agentName = urlParams.get('agentName'); // url로 넘어온 코드 값
    const userName = urlParams.get('userName'); // url로 넘어온 코드 값
    agentId = urlParams.get('agentId'); // url로 넘어온 코드 값
    const userId = urlParams.get('userId'); // url로 넘어온 코드 값
    if(agentName != ""){
        $('#tempName').val(agentName);
        $('#tempId').val(agentId);
    }else if(userName != ""){
        $('#tempName').val(userName);
        $('#tempId').val(userId);
    }
    chengeAlram(userId);
    findRequest(agentId);

    if(agentName !== null){
        $('#loginName').val(agentName);
    }else if (userName !== null){
        $('#loginName').val(userName);
    }

    const logInfo = $('#logInfo').val();
    console.log("logInfo: "+logInfo);
    if (logInfo === 'null') {
        $('#logout').hide();
        $('#login').show();
        $('#join').show();
    } else {
        $('#logout').show();
        $('#login').hide();
        $('#join').hide();
    }
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

    function findRequest(){
        $.ajax({
            "url": "/reservationByAgentId",
            "method": "GET",
            "timeout": 0,
            data : {
                agentId : agentId
            }
        }).done(function (response) {
            let newCount = "";
            if (response && response.length > 0 ) {
                response.forEach(requestList => {
                    if(requestList.newRequestAlram){

                        newCount++;
                    }
                });
                console.log("newCount:"+newCount);
                if(newCount > 0){
                    $("#changeAlram").text(' ('+newCount+') ');
                    $("#changeAlram").attr("style","display:block");
                    $("#myImg").attr("src", "/style/images/alramMy.png");

                }else{
                    $("#changeAlram").hide();
                    $("#myImg").attr("src", "/style/images/myImg.png");
                }
            }

        });
    }

});


function logout() {
    $.ajax({
        url: "/logout", // 로그아웃 처리를 수행하는 URL
        method: "POST",
        success: function(response) {
            console.log("response: "+response);
            if(response === true){
                alert("로그아웃 되었습니다.");
                location.href = "/login"; // 로그인 페이지로 이동
            }
        },
        error: function(xhr, status, error) {
            console.error("로그아웃 실패:", error);
        }
    });
}