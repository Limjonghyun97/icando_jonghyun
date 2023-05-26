

$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    agentId = urlParams.get('agentId'); // url로 넘어온 코드 값
    console.log("agentId:"+agentId);

    $.ajax({
        url: "/agentById", // 활동후기 코드를 해당 서버로 보냄
        method: "GET",
        data: { agentId: agentId }, // 클릭이 일러난 코드
        success: function(response) {

            $('#agentId').val(response.agentId);
            $('#agentNickname').text(response.agentNickname);
            $('#agentAge').text(response.agentAge);
            $('#agentGender').text(response.agentGender);
            $('#agentPrice').text(response.agentPrice);
            $('#categoryName').text(response.categoryName);
            $('#regionName').text(response.regionName);
            $('#agentAbout').text(response.agentAbout);
            const agentImage = document.getElementById("agentImage");
            agentImage.style.display = "block"; // 이미지가 보이도록 설정
            $('#agentImage').attr('src', response.agentImage);

        },
        error: function(error) {
            console.log(error);
        }
    });

});

function requestCheck(){
    console.log("agentIdagentId:" + agentId);
    location.href=`/doThisPage?agentId=${agentId}`;

}