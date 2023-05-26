let userId ="";
let userCredit = "";
$(document).ready(function() {

    const urlParams = new URLSearchParams(window.location.search);
    userId = urlParams.get('userId'); // url로 넘어온 코드 값
    console.log("userId:" + userId);

    const tempRegDate = $('#regDate').text();
    const tempUpdateDate = $('#updateDate').text();
    const regDate = tempRegDate.split('T')[0];
    const updateDate = tempUpdateDate.split('T')[0];
    $('#regDate').text(regDate);
    $('#updateDate').text(updateDate);

    console.log("userId: " + userId);
    $.ajax({
        url: "/userCreditById",
        method: "GET",
        data: { userId: userId },
        success: function(response) {
            const money = response.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            if(money === '0'){
                $('#userCredit').text("잔액없음");
            }else{
                $('#userCredit').text(money+"원");
            }
        },
        error: function(error) {
            console.log(error);
        }
    });

})
function updateCredit(button) {

    let userCredits = $('#userCredit').text();
    if(userCredits !== '잔액없음'){
        userCredit = userCredits.replace(/,/g, "").replace("원", "");
    }else{
        userCredit = '0';
    }

    const plusCredit = prompt("충전할 금액을 입력하세요.", "");
    const total = parseInt(userCredit) + parseInt(plusCredit);
    console.log("credit:"+userCredit);
    console.log("plusCredit:"+plusCredit);
    console.log(total);
    $.ajax({
        url: `/userCreditUpdate`,
        type: "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            userId: userId,
            userCredit : total
        }),
        success: function(response) {
            alert("계좌 잔액이 충전되었습니다.");
            console.log("충전 후:"+response.userCredit);
            const totalCredit = response.userCredit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            $('#userCredit').text(totalCredit+"원");

        },
        error: function() {
            alert("계좌 잔액 충전에 실패했습니다.");
        }
    });
}