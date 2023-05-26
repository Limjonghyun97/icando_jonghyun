$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const fnaCode = urlParams.get('fnaCode'); // url로 넘어온 코드 값

    // 내 글에만 수정 버튼 보이기
    $.ajax({
        url: "/fnaByCode", // 활동후기 코드를 해당 서버로 보냄
        method: "GET",
        data: { fnaCode: fnaCode }, // 클릭이 일러난 코드
        success: function(response) {

            const content = response.fnaContent;
            $("#fnaContents").val(content);
        },
        error: function(error) {
            console.log(error);
        }
    });

});