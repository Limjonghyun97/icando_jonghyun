let totalNum = 8;
const agentMore = document.getElementById("agentMore");
let nowUrl = document.location.href;


if (nowUrl === "http://localhost:8080/agentList") {
    agentAll(0);
} else if (nowUrl.replace(/\?.*$/, '') === "http://localhost:8080/agentListByCategoryCode") {
    categoryAgentList();
} else {
    printAgentTopTen();
    agentRank(totalNum);
}


function printAgentTopTen() {
    // top 10 출력
    var settings = {
        "url": "agentRank",
        "method": "POST",
        "timeout": 0,
    };


    $.ajax(settings).done(function (response) {
        let rank = 1;
        response.forEach(agentList => {
            if (rank <= 10) {
                const fullStars = agentList.agentScore;
                const formattedPrice = agentList.agentPrice.toLocaleString('en-US', { style: 'currency', currency: 'KRW' });
                console.log('agent:'+agentList.agentScore);
                let halfStar = '';
                let a = agentList.agentScore - Math.floor(agentList.agentScore);
                console.log('소수점:'+a);
                if (a >= 0.5) {
                    halfStar = '🌗';
                }
                let starHtml = '';
                for (let i = 1; i <= fullStars; i++) {
                    starHtml += '🌕';
                }
                starHtml += halfStar;
                $('#nav').append(`
                <div class="carousel-item">
                    <a href="/lookForAgent?agentId=${agentList.agentId}"><img src="${agentList.agentImage}" alt="Image1" style="width: 230px; height: 240px;"></a>
                    <h2>${agentList.agentNickname}</h2>
                    <p>${agentList.agentAbout.slice(0, 15)}${agentList.agentAbout.length > 10 ? '...' : ''}</p>
                    <p>${formattedPrice}원</p>
                    <p>${agentList.regionName}</p>
                    <p>${starHtml}(${rank++}등)</p>
                    <p>${agentList.categoryName}</p>
                </div>
            `);
            }
        });
    });
}

// select box에 값에 따라 변경
$('#main-board-type').change(function () {
    if (this.value === "new") {
        totalNum = 8;
        agentRecent(totalNum);
        agentMore.classList.replace('rankAgentMore', 'newAgentMore');
    } else if (this.value === "rank") {
        totalNum = 8;
        agentRank(totalNum);
        agentMore.classList.replace('newAgentMore', 'rankAgentMore');
    }
})

// agent 등급순
function agentRank(totalNum) {
    let printNum = 0;
    var settings = {
        "url": "agentRank",
        "method": "POST",
        "timeout": 0,
    };
    $.ajax(settings).done(function (response) {
        $('#main-board').empty();
        response.forEach(rankAgentList => {
            if (totalNum > printNum) {
                const formattedPrice = rankAgentList.agentPrice.toLocaleString('en-US', { style: 'currency', currency: 'KRW' });
                const fullStars = rankAgentList.agentScore;
                console.log('agent:'+rankAgentList.agentScore);
                let halfStar = '';
                let a = rankAgentList.agentScore - Math.floor(rankAgentList.agentScore);
                console.log('소수점:'+a);
                if (a >= 0.5) {
                    halfStar = '🌗';
                }
                let starHtml = '';
                for (let i = 1; i <= fullStars; i++) {
                    starHtml += '🌕';
                }
                starHtml += halfStar;
                $('#main-board').append(`
                <div class="board-content">
                    <div>
                        <a href="/lookForAgent?agentId=${rankAgentList.agentId}"><img class="board-img" src="${rankAgentList.agentImage}"></a>     
                    </div>
                    <div>
                        ${rankAgentList.regionName}
                    </div>
                    <div>
                        ${rankAgentList.agentNickname}
                    </div>
                    <div>
                        ${starHtml}
                    </div>
                    <div>
                        ${rankAgentList.categoryName}
                    </div>
                    <div>
                        <div></div>
                        <div>${formattedPrice}원</div>
                    </div>
                </div>
            `);
                printNum++;
            }
        });
    });

}

// agent 최신순
function agentRecent(totalNum) {
    let printNum = 0;
    var settings = {
        "url": "agentRecent",
        "method": "POST",
        "timeout": 0,
    };
    $.ajax(settings).done(function (response) {
        $('#main-board').empty();
        response.forEach(newAgentList => {
            if (totalNum > printNum) {
                const fullStars = newAgentList.agentScore;
                const formattedPrice = newAgentList.agentPrice.toLocaleString('en-US', { style: 'currency', currency: 'KRW' });
                console.log('agent:'+newAgentList.agentScore);
                let halfStar = '';
                let a = newAgentList.agentScore - Math.floor(newAgentList.agentScore);
                console.log('소수점:'+a);
                if (a >= 0.5) {
                    halfStar = '🌗';
                }
                let starHtml = '';
                for (let i = 1; i <= fullStars; i++) {
                    starHtml += '🌕';
                }
                starHtml += halfStar;
                $('#main-board').append(`
                <div class="board-content">
                    <div>
                        <a href="/lookForAgent?agentId=${newAgentList.agentId}"><img class="board-img" src="${newAgentList.agentImage}"></a>     
                    </div>
                    <div>
                        ${newAgentList.regionName}
                    </div>
                    <div>
                        ${newAgentList.agentNickname}
                    </div>
                    <div>
                        ${starHtml}
                    </div>
                    <div>
                        ${newAgentList.categoryName}
                    </div>
                    <div>
                        <div></div>
                        <div>${formattedPrice}원</div>
                    </div>
                </div>
            `);
                printNum++;
            }
        });
    });
}

$('#agentMore').click(function () {
    totalNum = totalNum + 4;
    if (this.className == "newAgentMore") {
        agentRecent(totalNum);
    } else {
        agentRank(totalNum);
    }
})

// agent 전체 출력
function agentAll(plusNum) {
    let firstListNum = 0 + plusNum;
    let lastListNum = 8 + plusNum;
    let count = 0;
    var settings = {
        "url": "agentAll",
        "method": "POST",
        "timeout": 0,
    };
    $.ajax(settings).done(function (response) {
        $('#main-board').empty();
        response.forEach(agentList => {
            if (count >= firstListNum && count < lastListNum) {
                const formattedPrice = agentList.agentPrice.toLocaleString('en-US', { style: 'currency', currency: 'KRW' });
                const fullStars = agentList.agentScore;
                console.log('agent:'+agentList.agentScore);
                let halfStar = '';
                let a = agentList.agentScore - Math.floor(agentList.agentScore);
                console.log('소수점:'+a);
                if (a >= 0.5) {
                    halfStar = '🌗';
                }
                let starHtml = '';
                for (let i = 1; i <= fullStars; i++) {
                    starHtml += '🌕';
                }
                starHtml += halfStar;
                $('#main-board').append(`
                <div class="board-content">
                    <div>
                        <a href="/lookForAgent?agentId=${agentList.agentId}"><img class="board-img" src="${agentList.agentImage}"></a>     
                    </div>
                    <div>
                        ${agentList.regionName}
                    </div>
                    <div>
                        ${agentList.agentNickname}
                    </div>
                    <div>
                        ${starHtml}
                    </div>
                    <div>
                        ${agentList.categoryName} 
                    </div>
                    <div>
                        <div></div>
                        <div>${formattedPrice}원</div>
                    </div>
                </div>
                `);
            }
            count++;
        });
        for (let i = 0; i < count / 8; i++) {
            $("#pageCount").append(`
                <input type="button" id="pageCount" value="${i}" onclick="clickPage(this.value)">   
            `)
        }
    });
}

function clickPage(e) {
    $("#pageCount").empty();
    let plusNum = e * 8;
    agentAll(plusNum);
}


// category로 출력
function categoryAgentList() {
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let categoryCode = param.get('categoryCode');
    const categoryIntCode = parseInt(categoryCode);

    $.ajax({
        "url": "agentListByCategoryCodePage",
        "method": "POST",
        data: {
            categoryCode: categoryIntCode
        },
        "timeout": 0,
    }).done(function (response) {
        $('#main-board').empty();
        response.forEach(agentList => {
            const formattedPrice = agentList.agentPrice.toLocaleString('en-US', { style: 'currency', currency: 'KRW' });
            $('#main-board').append(`
                   <div class="board-content">
                    <div>
                        <a href="/lookForAgent?agentId=${agentList.agentId}"><img class="board-img" src="${agentList.agentImage}"></a>
                    </div>
                    <div>
                        ${agentList.regionName}
                    </div>
                    <div>
                        ${agentList.agentNickname}
                    </div>
                    <div>
                        ${formattedPrice}점
                    </div>
                    <div>
                        ${agentList.categoryName}
                    </div>
                    <div>
                        <div></div>
                        <div>${agentList.agentPrice}원</div>
                    </div>
                </div>
            `);
        });
    });
}