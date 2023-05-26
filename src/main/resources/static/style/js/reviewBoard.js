let userId = "";
let userName = "";
let plusNum = 0;

$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    userId = urlParams.get('userId'); // url로 넘어온 코드 값
    userName = urlParams.get('userName'); // url로 넘어온 코드 값

    const logValue = document.getElementById('logInfo').value;
    if(logValue === 'user' || logValue === 'null'){
        $('#writeReview').show();
    }else{
        $('#writeReview').hide();
    }
    reviewMore(plusNum);
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

function writeReviewPage() {

    const logInfo = $('#logInfo').val();
    if(logInfo != 'null'){
        $.ajax({
            "url": "/reservationByUserIdAndCheckComplete",
            "method": "GET",
            "timeout": 0,
            data : {
                userId : userId
            }
        }).done(function (response) {

            if (response && response.length > 0) {
                response.forEach(requestList => {

                    location.href = `/writeReview?`;
                });
            } else {
                alert("완료된 의뢰내역이 있어야 후기 작성이 가능합니다.")
                location.href = `/?userName=${userName}&userId=${userId}`;
            }
        });

    }else{
        const confirmation = confirm("로그인 후 이용하실 수 있습니다. 로그인 페이지로 이동하시겠습니까?");

        if (confirmation) {
            // 사용자가 확인을 선택한 경우
            window.location.href = "/login";  // 로그인 페이지로 이동
        } else {
            location.href = `/`;
        }

    }

}

function reviewMore(plusNum) {
    let total = 8 + plusNum;
    let count= 0;
    $.ajax({
        "url": "/v1/search/reviewBoard",
        "method": "GET",
        "timeout": 0,
    }).done(function (response) {
        console.log("리뷰보드:"+response);
        response.forEach(reviewList => {
            if(count < total) {
                const reviewCode = reviewList.reviewCode;
                const userId = reviewList.userId;
                const agentId = reviewList.agentId;
                const reviewTitle = reviewList.reviewTitle;
                const giveScore = reviewList.giveScore;
                const regDate = formatDate(reviewList.regDate);
                const viewCount = reviewList.viewCount;
                $('#reviewBoard').append(`
            <div class="board-content">
                    <div>
                        <a href="/reviewDetail?reviewCode=${reviewCode}"><img class="board-img" src="${reviewList.reviewImage}"></a>     
                    </div>
                    <div>
                        No: ${reviewList.reviewCode}
                    </div>
                    <div>
                       ${reviewList.reviewTitle}
                    </div>
                    <div>
                       
                    </div>
                    <div>
                        일시: ${reviewList.regDate} 
                    </div>
                    <div>
                        <div></div>
                        <div>조회수: ${reviewList.viewCount}</div>
                    </div>
                </div>
        `);
            }

            count++;
        })

    });
}

function reviewMoreBtn(){
    $('#reviewBoard').empty();
    plusNum += 4;
    reviewMore(plusNum);
}