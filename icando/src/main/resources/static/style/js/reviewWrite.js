let userId = "";
let agentId = "";
function findRequestList(){
    userId = $("#userId").val();
    $.ajax({
        "url": "/reservationByUserIdAndCheckComplete",
        "method": "GET",
        "timeout": 0,
        data : {
            userId : userId
        }
    }).done(function (response) {

        if (response && response.length > 0) { // response가 존재하고, 배열의 길이가 0보다 큰 경우
            response.forEach(requestList => {
                $('#completeRequest').append(`
                    <option value="${requestList.resCode}">${requestList.resTitle}</option>
                `);

            });
        } else {
            alert("완료된 의뢰내역이 있어야 후기 작성이 가능합니다.")
            location.href = `/?userName=${userName}&userId=${userId}`;
        }
    });
}
$(document).ready(function() {
    findRequestList();
});

function getAgentId(){
    const resCode = $('#completeRequest').val();
    $.ajax({
        url: "/requestByResCode" ,
        method: "GET",
        data: { resCode: resCode },
        success: function(response) {
            agentId = response.agentId;
        },
        error: function(error) {
            console.log(error);
        }

    });
}

function uploadImage() {
    const imageFile = document.getElementById("imageFile").files[0];

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("key", "4f35fdbb8cc5afe658d7f00211493eb9");

    $.ajax({
        url: "https://api.imgbb.com/1/upload",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function (response) {
            alert("responseurl:"+response);
            alert("url:"+response.data.url);
            const imageUrl = response.data.url;
            // 이미지 저장소에 이미지 업로드 후 imgbb 에서 리스폰스 해준 url을
            // agentImage 값으로 저장
            document.getElementById("reviewImage").value = imageUrl;
            //미리보기를 위해 previewImage에 url 저장하여 저장소에 업로드후
            // 페이지에서 미리보기 기능 구현
            document.getElementById("previewImage").src = imageUrl;
            alert("이미지 업로드 완료.");
        },
        error: function (xhr, status, error) {
            alert("이미지 업로드 실패.");
            console.log(error);
        },
    });
}

function writeReview() {
    const reviewImage = document.getElementById("reviewImage").value;
    const resCode = $('#completeRequest').val();

    userId = $("#userId").val();
    const reviewTitle = $("#reviewTitle").val();
    const reviewContents = $("#reviewContents").val();

    let url = "/writeReview?";

    let check = true;
    if (userId !== "") {
        url += "userId=" + userId + "&";
    }
    if (reviewTitle !== "") {
        url += "reviewTitle=" + reviewTitle + "&";
    }
    if (reviewContents !== "") {
        url += "reviewContents=" + reviewContents + "&";
    }
    if (resCode !== "") {
        url += "resCode=" + resCode + "&";
    }


    if (reviewTitle === "") {
        alert('제목이 입력되지 않았습니다');
        check = false;
    } else if (reviewContents === "") {
        alert('내용이 입력되지 않았습니다');
        check = false;
    }else if (resCode === "") {
        alert('의뢰내역이 입력되지 않았습니다');
        check = false;
    }
    if (check === false) {
        location.href = url;
    }else{

        // Ajax 요청을 통해 업데이트 처리
        $.ajax({
            "url": "write_review",
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({ //JSON 직렬화
                resCode : resCode,
                userId : userId,
                agentId : agentId,
                reviewTitle: reviewTitle,
                reviewContent: reviewContents,
                reviewImage : reviewImage
            }),
            success: function(response) {
                // 업데이트 성공 시 처리 로직
                console.log("등록 완료");
                location.href = "/reviewBoard";
            },
            error: function(error) {
                // 업데이트 실패 시 처리 로직
                console.log("등록 오류발생");
                location.href = "/reviewBoard.js";
            }
        });
    }
}