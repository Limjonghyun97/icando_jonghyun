
function  addComment(){
    const logId = document.getElementById("logId").value;
    const reviewCode = document.getElementById("reviewCode").value;
    const commentContent = document.getElementById("commentContent").value;


    if (commentContent === "") {
        alert('댓글이 입력되지 않았습니다');
    }

    if(logId != ''){

        $.ajax({
            "url": "writeReviewComment",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({ //JSON 직렬화
                userId : logId,
                reviewCode : reviewCode,
                reviewComment: commentContent,

            }),
            success: function(response) {

                alert("댓글작성 완료");
                // 업데이트 성공 시 처리 로직
                console.log("댓글작성 완료");
                location.href = `/reviewDetail?reviewCode=${reviewCode}`;
            },
            error: function(error) {
                // 업데이트 실패 시 처리 로직
                alert("업데이트 오류발생");
                location.href = `/reviewDetail?reviewCode=${reviewCode}`;
            }
        });
    }
}

function  deleteReviewComment(reviewCode,reCmtCode){
    $.ajax({
        "url": "commentDelete",
        "method": "GET",
        "data": {
            reCmtCode: reCmtCode
        },
        success: function() {
           alert("댓글삭제 완료");
            location.href = `/reviewDetail?reviewCode=${reviewCode}`;
        },
        error: function(error) {
            alert("실패: "+error);
            console.log("업데이트 오류발생");
            location.href = `/reviewDetail?reviewCode=${reviewCode}`;
        }
    });
}

function  updateReviewComment(button){
    const listValue = button.closest('tr');
    const reCmtCode = listValue.cells[0].querySelector('input').value;
    const reviewCode = document.getElementById("reviewCode").value;
    const updateCmt = listValue.cells[2].querySelector('textarea').value;

    if (updateCmt === "") {
        alert('댓글이 입력되지 않았습니다');
    }
    $.ajax({
        "url": "updateReviewComment",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({ //JSON 직렬화
            reCmtCode: reCmtCode,
            reviewCode : reviewCode,
            reviewComment: updateCmt,

        }),
        success: function(response) {
            $("#updateCmt").val(response.reviewComment);
            alert("댓글작성 완료");
            // 업데이트 성공 시 처리 로직
            location.href = `/reviewDetail?reviewCode=${reviewCode}`;
        },
        error: function(error) {
            // 업데이트 실패 시 처리 로직
            alert("업데이트 오류발생");
            location.href = `/reviewDetail?reviewCode=${reviewCode}`;
        }
    });

}



