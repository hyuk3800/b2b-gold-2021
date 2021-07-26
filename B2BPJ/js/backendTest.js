const product = {
    "조각 돌반지": {
        "이미지": "업스토어 분석/img/upload_e91878893940bba1d25bc150df3cf7ca.jpg",
        "": "",
        "부위": "반지",
        "소제": "순금995",
        "기추": "3000",
        "중보": "0",
        "금(은)중량": "3.75",
        "금알수": "0",
        "스톤중량": "0.00",
        "스톤알수": "0",
        "수량": "1",
        "공임함": "3,000",
        "금값": "0",
        "소계": "3,000",
    },
    "999.9 황금돼지골드바": {
        "이미지": "업스토어 분석/img/upload_23166a2efcc4a469462d7fb06cb6aed1.jpg",
        "부위": "기타",
        "소제": "순금999",
        "기추": "17000",
        "중보": "0",
        "금(은)중량": "11.25",
        "금알수": "0",
        "스톤중량": "0.00",
        "스톤알수": "0",
        "수량": "1",
        "공임함": "17,000",
        "금값": "0",
        "소계": "17,000",
    },
    "999 황금돼지골드바": {
        "이미지": "업스토어 분석/img/upload_23166a2efcc4a469462d7fb06cb6aed1.jpg",
        "부위": "기타",
        "소제": "순금999",
        "기추": "17000",
        "중보": "0",
        "금(은)중량": "11.25",
        "금알수": "0",
        "스톤중량": "0.00",
        "스톤알수": "0",
        "수량": "1",
        "공임함": "17,000",
        "금값": "0",
        "소계": "17,000",
    },
} //////////// product /////////


function showProductCard() {

    //console.log("작동 확인!");

    const cg = document.querySelector("#cardTest");

    for (var x in product) {
       // console.log(x);
       // console.log(product[x]);

        cg.innerHTML +=
            '<div class="catalogCard">' +
            '<div id="catalogImg">' +
            '<img src="' + product[x]["이미지"] + '" alt="' + product[x]["이미지"] + '">' +
            '</div>' +
            '<div id="catalogId">' +
            '<span>' + x + '</span>' +
            ' </div>' +

            '<div id="catalogTxt">' +
            '<span>' + product[x]["부위"] + '</span>' + '/' + '<span>' + product[x]["소제"] + '</span>' + '<br>' +
            '<span>' + product[x]["기추"] + '</span>' + '/' + '<span>' + product[x]["중보"] + '</span>' + '<br>' +
            '<span>' + product[x]["금(은)중량"] + '</span>' + '/' + '<span>' + product[x]["스톤중량"] + '</span>' +
            '</div>' +


            '<div class="clickBox">' +
            '<form class="clickbxbx" name="clickbxbx">' +
            '<input name="clickThis" class="clickThis" type="checkbox">' +
            '</form>' +

            '<button class="rmvBtn">조회/수정</button>' +

            '</div>' +
            '</div>'
    }

    const tg = document.querySelector("#tableTest");

    for (var y in product) {
      //  console.log(y);
      //  console.log(product[y]);

        tg.innerHTML +=
            '<tbody>' +
            '<tr>' +
            '<td rowspan="2">' +
            '<input name="clickThis" class="clickThis" type="checkbox">' +
            '</td>' +
            '<td rowspan="2">' +
            '<div class="model"><img src="' + product[y]["이미지"] + '" alt="' + product[y]["이미지"] + '"></div>' +
            '<div class="mdName">' +
            '<span>' + y + '</span>' +
            '</div>' +
            '</td>' +
            '<td rowspan="2">' +
            '<span>' + product[y]["소제"] + '</span>' +
            '</td>' +
            '<td>' +
            '<span>' + product[y]["금(은)중량"] + '</span>' +
            '</td>' +
            '<td>' +
            '<span>' + product[y]["금알수"] + '</span>' +
            '</td>' +
            '<td>' +
            '<span>' + product[y]["기추"] + '</span>' +
            '</td>' +
            '<td>' +
            '<span>' + product[y]["중보"] + '</span>' +
            '</td>' +
            '<td rowspan="2">' +
            '<span>' + product[y]["수량"] + '</span>' +
            '</td>' +
            '<td rowspan="2">' +
            '<span>' + product[y]["공임함"] + '</span>' +
            '</td>' +
            '<td rowspan="2">' +
            '<span>' + product[y]["금값"] + '</span>' +
            '</td>' +
            '<td rowspan="2">' +
            '<span>' + product[y]["소계"] + '</span>' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td>' +
            '   <span>' + product[y]["스톤중량"] + '</span>' +
            '</td>' +
            '<td>' +
            ' <span>' + product[y]["스톤알수"] + '</span>' +
            '</td>' +
            '<td>' +
            '<span>0</span>' +
            '</td>' +
            '<td>' +
            '   <span>0</span>' +
            '</td>' +
            '</tr>' +

            '</tbody>'

    }


}