$(document).ready(function() {
    completeValue();
});


function completeValue() {
    resCode = $("#checkValue").val();

    $.ajax({
        url: `/updateCheckComplete`,
        type: "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            checkComplete: true,
            resCode: resCode,

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