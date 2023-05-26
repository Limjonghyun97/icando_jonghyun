$.ajax({
    "url": "/v1/search/fnaBoard",
    "method": "GET",
    "timeout": 0,
}).done(function (response) {
    console.log(response);
    $('#fna_Board').empty();

    response.forEach(fnaList => {

        const fnaCode = fnaList.fnaCode;
        const fnaTitle = fnaList.fnaTitle;

        $('#fna_Board').append(`
            <tr>
                <td>Q</td>
                <td onclick="clickBtn(${fnaCode})">${fnaTitle}</td>
            </tr>
            <tr id="fnaDetail${fnaCode}" class="fnaDetail"></tr>
        `);
    })

});

function clickBtn (fnaCode){
    console.log(fnaCode)
    $.ajax({
        url: "/fnaByCode", // 활동후기 코드를 해당 서버로 보냄
        method: "GET",
        data: { fnaCode: fnaCode }, // 클릭이 일러난 코드
        success: function(response) {
            $('.fnaDetail').empty()
            const content = response.fnaContent;
            $('#fnaDetail'+ fnaCode).append(`
          <td id="answerContent">
          A:  ${content}
            </td>
        `)
        },
        error: function(error) {
            console.log(error);
        }
    });
};

