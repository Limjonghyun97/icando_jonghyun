const userId = document.getElementById('agentId').value;
console.log(agentId);
function agentDelete() {
    if (confirm("정말로 탈퇴하시겠습니까?")) {
        $.ajax({
            url: `/agentIdDelete`,
            type: "Delete",
            data:{
                agentId: agentId
            },
            success: function(response) {
                alert("에이전트회원 탈퇴가 완료되었습니다.");
                window.location.href = "/";
            },
            error: function() {
                alert("에이전트회원 탈퇴에 실패했습니다.");
            }
        });
    }
}