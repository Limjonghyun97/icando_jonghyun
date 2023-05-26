$(document).ready(function() {
    $.ajax({
        "url": "/v1/search/regionList",
        "method": "GET",
        "timeout": 0,
    }).done(function (response) {
        console.log(response);
        $('#regionCode').empty();

        response.forEach(regionList => {

            const regionName = regionList.regionName;
            const regionCode = regionList.regionCode;
            $('#regionCode').append(`
            <option value="${regionCode}">${regionName}</option>
        `);

        })

    });

    $.ajax({
        "url": "/v1/search/categoryList",
        "method": "GET",
        "timeout": 0,
    }).done(function (response) {
        console.log(response);
        $('#categoryCode').empty();

        response.forEach(categoryList => {

            const categoryName = categoryList.categoryName;
            const categoryCode = categoryList.categoryCode;
            $('#categoryCode').append(`
            <option value="${categoryCode}">${categoryName}</option>
            
            
        `);

        })

    });

});


function checkValues() {
    console.log("유효성 검사 함수 출력됨"); // htmlForm이 제대로 넘어갔는지 확인 용도

    let url = "/join";

    let check = true;

    const userId = document.getElementById("userId").value;
    const userPassword = document.getElementById("userPassword").value;
    const userName = document.getElementById("userName").value;
    const userGender = document.getElementById("userGender").value;
    const userAge = document.getElementById("userAge").value;
    const userNickname = document.getElementById("userNickname").value;
    const userPhone = document.getElementById("userPhone").value;

    if (userId === "") {
        alert('아이디가 입력되지 않았습니다');
        check = false;
    } else if (userPassword === "") {
        alert('비밀번호가 입력되지 않았습니다');
        check = false;
    } else if (userName === "") {
        alert('이름이 입력되지 않았습니다');
        check = false;
    } else if (userGender === "") {
        alert('성별이 입력되지 않았습니다');
        check = false;
    } else if (userAge === "") {
        alert('나이가 입력되지 않았습니다');
        check = false;
    }else if (userNickname === "") {
        alert('닉네임이 입력되지 않았습니다');
        check = false;
    }else if (userPhone === "") {
        alert('전화번호가 입력되지 않았습니다');
        check = false;
    }

    if (check === false) {
        location.href = url;
    } else {

        $.ajax({
            "url": url,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({
                userId: userId,
                userPassword: userPassword,
                userName: userName,
                userGender: userGender,
                userAge: userAge,
                userNickname : userNickname,
                userPhone : userPhone,

            }),
        }).done(function (response) {
            console.log(response);
            if(response === false){
                alert("중복된 아이디 입니다.");
                location.href = url;
            }else{
                alert("회원가입 완료.");
                location.href = "login";
            }
        });
    }
}


function uploadImage() {
    const imageFile = document.getElementById("imageFile").files[0];

    if (!imageFile) {
        alert("이미지를 선택해주세요.");
        return;
    }

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
            document.getElementById("agentImage").value = imageUrl;
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


function checkAgent() {
    console.log("유효성 검사 함수 출력됨"); // htmlForm이 제대로 넘어갔는지 확인 용도

    let url = "/agentJoin";

    let check = true;
    // agentImage에 저장된 경로 값을
    // 다시 받아와 agent DB에 저장하기
    // 그렇게 저장된 url은 이미지를 출력을하는 곳에 <img>태그의 src에 사용하면 이미지 출력됨

    const agentImage = document.getElementById("agentImage").value;
    console.log("업로드된 사진경로:"+agentImage);
    const agentId = document.getElementById("agentId").value;
    const agentPassword = document.getElementById("agentPassword").value;
    const agentName = document.getElementById("agentName").value;
    const agentNickname = document.getElementById("agentNickname").value;
    const agentAge = document.getElementById("agentAge").value;
    const agentGender = document.getElementById("agentGender").value;
    const regionCode = document.getElementById("regionCode").value;
    const categoryCode = document.getElementById("categoryCode").value;
    // 선택된 옵션의 문자를 가져온다
    const regionName = $('#regionCode option:selected').text();
    const categoryName = $('#categoryCode option:selected').text();

    const agentPrice = document.getElementById("agentPrice").value;
    const agentPhone = document.getElementById("agentPhone").value;
    const agentAbout = document.getElementById("introduce-join").value;
    const agentScore = document.getElementById("agentScore").value;
    const agentCredit = document.getElementById("agentCredit").value;



    if (agentId === "") {
        alert('아이디가 입력되지 않았습니다');
        check = false;
    } else if (agentPassword === "") {
        alert('비밀번호가 입력되지 않았습니다');
        check = false;
    } else if (agentName === "") {
        alert('이름이 입력되지 않았습니다');
        check = false;
    } else if (agentNickname === "") {
        alert('닉네임이 입력되지 않았습니다');
        check = false;
    } else if (agentAge === "") {
        alert('나이가 입력되지 않았습니다');
        check = false;
    }else if (agentGender === "") {
        alert('성별이 입력되지 않았습니다');
        check = false;
    }else if (regionCode === "") {
        alert('활동지역이 입력되지 않았습니다');
        check = false;
    }else if (categoryCode === "") {
        alert('특기가 입력되지 않았습니다');
        check = false;
    }else if (agentPrice === "") {
        alert('시급이 입력되지 않았습니다');
        check = false;
    }else if (agentPhone === "") {
        alert('핸드폰번호가 입력되지 않았습니다');
        check = false;
    }else if (agentAbout === "") {
        alert('자기소개가 입력되지 않았습니다');
        check = false;
    }else if (agentImage === undefined) {
        alert('대표이미지를 등록하세요');
        check = false;
    }

    if (check === false) {
        location.href = url;
    } else {
        $.ajax({
            "url": url,
            "method": "POST",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },

            "data": JSON.stringify({
                agentId: agentId,
                agentPassword: agentPassword,
                agentName: agentName,
                agentNickname: agentNickname,
                agentAge: agentAge,
                agentGender: agentGender,
                regionCode: regionCode,
                categoryCode: categoryCode,
                regionName: regionName,
                categoryName: categoryName,
                agentPrice: agentPrice,
                agentPhone: agentPhone,
                agentAbout: agentAbout,
                agentScore: agentScore,
                agentCredit: agentCredit,
                agentImage: agentImage,
                starPoint : 0
            }),
        }).done(function (response) {
            console.log(response);
            if(response === false){
                alert("중복된 아이디 입니다.");
                location.href = url;
            }else{
                alert("회원가입 완료.");
                location.href = "login";
            }
        });
    }
}