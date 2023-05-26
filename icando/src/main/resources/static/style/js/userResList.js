let agentId = "";
let userId = "";
let resCode = "";
$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    userId = urlParams.get('userId'); // url로 넘어온 코드 값
    console.log("userId:"+userId);
    $.ajax({
        "url": "/reservationByUserId",
        "method": "GET",
        "timeout": 0,
        data : {
            userId : userId
        }
    }).done(function (response) {
        $('#requestList').empty();

        if (response && response.length > 0) { // response가 존재하고, 배열의 길이가 0보다 큰 경우
            response.forEach(requestList => {
                resCode = requestList.resCode;
                const userId = requestList.userId;
                const userNickname = requestList.userNickname;
                const agentId = requestList.agentId;
                const resTitle = requestList.resTitle;
                const totalPrice = requestList.totalPrice;
                const checkComplete = requestList.checkComplete;
                const checkApply = requestList.checkApply;
                const checkSuccess = requestList.checkSuccess;
                const regDate = formatDate(requestList.regDate);
                const totalPrices = totalPrice.replace(/,/g, "")
                const changeAlram = requestList.changeAlram;
                 console.log("참거짓:"+changeAlram);
                const rowClass = changeAlram ? 'changeAlram' : '';


                const row = `
                       <tr class="tbContentTitle ${rowClass}">
                         <input type="hidden" id="userId" value="${userId}" readonly>
                         <td>${userNickname}</td>
                         <td><a id="tbTitleA" href="userRequestDetail?userId=${userId}&resCode=${resCode}&agentId=${agentId}">${resTitle}</a ></td>
                         <td>${regDate}</td>
                         <td>${agentId}</td>
                         <td>${checkComplete ? '<button type="button" id="detail_button" class="tbBtn">임무완료</button>' : '<button type="button" id="detail_button" class="tbBtn">상세보기</button>'}</td>
                         <td>${checkApply ? (checkComplete ? '완료' : (checkSuccess ? '승인필요' : '진행중')) : '고민중'}</td>
                      </tr>
                        `;
                $('#requestList').append(row);
                if (changeAlram) {
                    $('.tbContentTitle.changeAlram').css('background-color', '#effff3');
                }

                $('#requestList').on('click', '#detail_button', function() {
                    // userId와 resCode 가져오기
                    var userId = $(this).closest('tr').find('#userId').val();
                    var resCode = $(this).closest('tr').find('a').attr('href').split('resCode=')[1];

                    // URL 생성
                    var url = `userRequestDetail?userId=${userId}&resCode=${resCode}`;

                    // URL로 이동
                    window.location.href = url;
                });
            });
        } else { // response가 존재하지 않거나, 배열의 길이가 0인 경우
            $('#requestList').append(`
      <tr id="noResponse">
        <td colspan="6">의뢰내역이 없습니다.</td>
      </tr>
    `);
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