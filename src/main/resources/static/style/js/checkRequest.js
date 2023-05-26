$(document).ready(function() {
    const urlParams = new URLSearchParams(window.location.search);
    const agentId = urlParams.get('agentId'); // url로 넘어온 코드 값
    console.log("상세페이지:"+agentId);

    $.ajax({
        "url": "/reservationByAgentId",
        "method": "GET",
        "timeout": 0,
        data : {
            agentId : agentId
        }
    }).done(function (response) {
        console.log(response);
        $('#requestList').empty();
        if (response && response.length > 0) {
        response.forEach(requestList => {
            const resCode = requestList.resCode;
            const userId = requestList.userId;
            const userNickname = requestList.userNickname;
            const agentId = requestList.agentId;
            const resTitle = requestList.resTitle;
            const checkComplete = requestList.checkComplete;
            const checkApply = requestList.checkApply;
            const checkSuccess = requestList.checkSuccess;
            const regDate = formatDate(requestList.regDate);
            const resContent = requestList.resContent;
            const newRequestAlram = requestList.newRequestAlram;
            const rowClass = newRequestAlram ? 'newRequestAlram' : '';
            console.log("신규: 참거짓?"+newRequestAlram);
            const row = `
                       <tr class="tbContentTitle ${rowClass}">
                         <input type="hidden" id="userId" value="${userId}" readonly>
                         <td>${userNickname}</td>
                         <td><a id="tbTitleA" href="requestDetail?userId=${userId}&resCode=${resCode}&agentId=${agentId}">${resTitle}</a ></td>
                         <td>${regDate}</td>
                         <td>${agentId}</td>
                         <td>${checkComplete ? '<button type="button" id="detail_button" class="tbBtn">임무완료</button>' : '<button type="button" id="detail_button" class="tbBtn">상세보기</button>'}</td>
                         <td>${checkApply ? (checkComplete ? '완료' : (checkSuccess ? '승인필요' : '진행중')) : '고민중'}</td>
                      </tr>
                        `;
            $('#requestList').append(row);
            if (newRequestAlram) {
                $('.tbContentTitle.newRequestAlram').css('background-color', '#effff3');
            }

            $('#requestList').on('click', '#detail_button', function() {
                // userId와 resCode 가져오기
                var userId = $(this).closest('tr').find('#userId').val();
                var resCode = $(this).closest('tr').find('a').attr('href').split('resCode=')[1];
                // URL 생성
                var url = `requestDetail?userId=${userId}&resCode=${resCode}`;

                // URL로 이동
                window.location.href = url;
            });

        })
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