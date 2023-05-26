const userId = document.getElementById('userId').value;
console.log(userId);
function userDelete() {
    if (confirm("정말로 탈퇴하시겠습니까?")) {
        $.ajax({
            url: `/userIdDelete`,
            type: "Delete",
            data:{
                userId: userId
            },
            success: function(response) {
                alert("회원 탈퇴가 완료되었습니다.");
                window.location.href = "/";
            },
            error: function() {
                alert("회원 탈퇴에 실패했습니다.");
            }
        });
    }
}