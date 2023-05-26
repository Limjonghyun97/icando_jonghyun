$(document).ready(function() {
    const loggedInUserId = document.getElementById("logId").value;
    console.log(loggedInUserId)
    // 현재url에서 reviewCode 받음.
    const urlParams = new URLSearchParams(window.location.search);
    const reviewCode = urlParams.get('reviewCode'); // url로 넘어온 코드 값
    console.log("상세페이지:"+reviewCode);

    if(loggedInUserId !== ''){
        $('#commentForm').show();
    }else{
        $('#commentForm').hide();
        $('.not_comment').append(`
            <p>#댓글은 로그인 후 이용할 수 있습니다.#</p>
        `);
    }
    // 내 글에만 수정 버튼 보이기
    $.ajax({
        url: "/reviewByCode", // 활동후기 코드를 해당 서버로 보냄
        method: "GET",
        data: { reviewCode: reviewCode }, // 클릭이 일러난 코드
        success: function(response) {


            // 응답 데이터에서 제목과 내용을 추출
            const userId = response.userId;
            const title = response.reviewTitle;
            const content = response.reviewContent;

            $("#reviewCode").val(reviewCode);
            $("#userId").val(userId);
            $("#reviewTitle").val(title);
            $("#reviewContents").val(content);
            const reviewImage = document.getElementById("reviewImage");
            reviewImage.style.display = "block"; // 이미지가 보이도록 설정
            if(response.reviewImage == null){
                $('#reviewImage').hide();
                $('#showImage').append(`
                    <h4>등록한 후기 사진이 없습니다.</h4>
               `);
            }else{
                $('#reviewImage').attr('src', response.reviewImage);
            }

            if(loggedInUserId === userId){
                $("#updateButtonContainer").show();
            }else{
                $("#updateButtonContainer").hide();
            }

            console.log("reviewCode:"+reviewCode);
            // 내 댓글만 x 버튼 표시
            $.ajax({
                url: "/reviewComment",
                method: "GET",
                timeout: 0,
                data: { reviewCode: reviewCode },
            }).done(function(response) {
                console.log(response);
                $('#commentList').empty();
                if (response.length >= 5) {
                    $('#scrollable').addClass('scrollable');
                }
                response.forEach(reCmtList => {
                    const reCmtCode = reCmtList.reCmtCode;
                    const userId = reCmtList.userId;
                    const reviewComment = reCmtList.reviewComment;
                    const regDate = formatDate(reCmtList.regDate);
                    if (userId === loggedInUserId) {
                        $('#commentList').append(`
                <tr>
                <td>
                    <input type="hidden" id="reCmtCode" value="${reCmtCode}">
                  </td>
                  <td> ${userId}</td>
                  <td> <textarea  id="updateCmt"  >${reviewComment}</textarea></td>
                  <td> ${regDate}</td>
                     <td>  <button class="updateButton" onclick="updateReviewComment(this)">수정</button></td>
                      <td>   <button class="deleteButton" onclick="deleteReviewComment(${reviewCode},${reCmtCode})">X</button></td>
                
                </tr>   
                `);
                    } else {
                        $('#commentList').append(`
                <tr>
                <td>
                    <input type="hidden" id="reCmtCode" value="${reCmtCode}">
                </td>
                  <td> ${userId}</td>
                    <td> <textarea  id="updateCmt" readonly >${reviewComment}</textarea></td>
                  <td> ${regDate}</td>
                 
                </tr>   
            `);
                    }
                });
            });
        },
        error: function(error) {
            console.log(error);
        }
    });

});

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}


function updateReview() {
    const reviewCode = $("#reviewCode").val();
    const reviewTitle = $("#reviewTitle").val();
    const reviewContents = $("#reviewContents").val();

    let url = "/reviewDetail?";

    let check = true;
    if (reviewCode !== "") {
        url += "reviewCode=" + reviewCode + "&";
    }
    if (reviewTitle !== "") {
        url += "reviewTitle=" + reviewTitle + "&";
    }
    if (reviewContents !== "") {
        url += "reviewContents=" + reviewContents + "&";
    }


    if (reviewTitle === "") {
        alert('제목이 입력되지 않았습니다');
        check = false;
    }
    else if (reviewContents === "") {
        alert('내용이 입력되지 않았습니다');
        check = false;
    }
    if (check === false) {
        location.href = url;
    }else{

        // Ajax 요청을 통해 업데이트 처리
        $.ajax({
            "url": "updateReview",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({ //JSON 직렬화
                reviewCode : reviewCode,
                reviewTitle: reviewTitle,
                reviewContent: reviewContents
            }),
            success: function(response) {
                // 업데이트 성공 시 처리 로직
                console.log("업데이트 완료");
                location.href = "/reviewBoard";
            },
            error: function(error) {
                // 업데이트 실패 시 처리 로직
                console.log("업데이트 오류발생");
                location.href = "/reviewDetail";
            }
        });
    }

}