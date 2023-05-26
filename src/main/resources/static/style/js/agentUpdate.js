getRegionList();
getCategoryList();
document.getElementById('imageFile').value = '${log.agentImage}';


function getAgentInfo() {
    // User 객체를 생성합니다.
    const agent = {
        agentName: $("#agentName").val(),
        agentId: $("#agentId").val(),
        agentPassword: $("#agentPassword").val(),
        agentNickname: $("#agentNickname").val(),
        agentAge: $("#agentAge").val(),
        agentGender: $("input[name=gender]:checked").val(),
        agentPhone: $("#agentPhone").val(),
        agentPrice: $("#agentPrice").val(),
        agentAbout: $("#agentAbout").val(),
        regionCode: $("#regionList").val(),
        regionName: $("#regionList option:selected").text(),
        categoryCode: $("#categoryList").val(),
        categoryName: $("#categoryList option:selected").text(),
        agentCredit: $("#agentCredit").val(),
        agentImage: $("#agentImage").val(),
    };

    if(agent.agentPassword != "" && agent.agentNickname != "" && agent.agentAge != "" && agent.agentGender != "" && agent.agentPrice != "" && agent.agentPhone != "" && agent.agentAbout != "" && agent.regionCode != "" && agent.categoryCode != "" && agent.agentImage != "") {
        agentUpdate(agent);
    } else {
        alert("내용을 모두 작성해주세요.")
    }

};

function agentUpdate(agent) {
    $.ajax({
        "url": "agentUpdatePage",
        "method": "POST",
        "contentType": "application/json",
        "data": JSON.stringify(agent),
        success: function(response) {
            if(response) {
                alert("에이전트정보 업데이트 성공");
                location.href = `/agentMypage?agentId=${response.agentId}`;
            } else {
                alert("에이전트정보 업데이트 실패");
                location.href = "/agentUpdate";
            }
        },
        error: function(error) {
            console.log("error");
        }
    });
}

function getRegionList() {
    $.ajax({
        "url": "v1/search/regionList",
        "method": "GET",
        "timeout": 0,
        success: function(response) {
            response.forEach(regionList => {
                $("#regionList").append(`
                    <option name="region" value="${regionList.regionCode}" ${$("#sessionRegionCode").val() == regionList.regionCode ? 'selected' : ''}>${regionList.regionName}</option>
                `)
            })
        },
        error: function(error) {
            console.log("error");
        }
    });
}

function getCategoryList() {
    $.ajax({
        "url": "v1/search/categoryList",
        "method": "GET",
        "timeout": 0,
        success: function(response) {
            response.forEach(categoryList => {
                $("#categoryList").append(`
                    <option name="region" value="${categoryList.categoryCode}" ${$("#sessionCategoryCode").val() == categoryList.categoryCode ? 'selected' : ''}>${categoryList.categoryName}</option>
                `)
            })
        },
        error: function(error) {
            console.log("error");
        }
    });
}

