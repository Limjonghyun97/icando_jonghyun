function mypageLoginCheck(id) {
    $.ajax({
        url: "/mypageLoginCheck",
        method: "POST",
        success: function(response) {
            if(response === true){
                console.log("response : " , response);
                const logInfo = $('#logInfo').val();
                if(logInfo ==='user'){

                    location.href = `/userMypage?userId=${id}`; // 로그인 페이지로 이동
                }else {
                    location.href = `/agentMypage?agentId=${id}`;
                }
            } else {
                alert("로그인 후 이용해주세요.");
                location.href = "/login";
            }
        },
        error: function(xhr, status, error) {
            console.error("실패:", error);
        }
    });
}
