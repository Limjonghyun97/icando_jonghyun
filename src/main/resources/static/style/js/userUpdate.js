function getUserInfo() {
    // User 객체를 생성합니다.
    const users = {
        userName: $("#userName").val(),
        userId: $("#userId").val(),
        userPassword: $("#userPassword").val(),
        userNickname: $("#userNickname").val(),
        userAge: $("#userAge").val(),
        userGender: $("input[name=gender]:checked").val(),
        userPhone: $("#userPhone").val(),
        userCredit: $("#userCredit").val()
    };

    if(users.userPassword != "" && users.userNickname != "" && users.userAge != "" && users.userGender != "" && users.userPhone != "") {
        userUpdate(users);
    } else {
        alert("내용을 모두 작성해주세요.")
    }

};

function userUpdate(users) {
    $.ajax({
        "url": "userUpdatePage",
        "method": "POST",
        "contentType": "application/json",
        "data": JSON.stringify(users),
        success: function(response) {
            if(response) {
                alert("회원정보 업데이트 성공");
                location.href = `/userMypage?userId=${response.userId}`;
            } else {
                alert("회원정보 업데이트 실패");
                location.href = "/userUpdate";
            }
        },
        error: function(error) {
            console.log("error");
        }
    });
}