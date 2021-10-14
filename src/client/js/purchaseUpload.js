const formPOST = document.querySelector("#formPOST");


const content = document.querySelectorAll(".content");
const material = document.querySelectorAll(".material");
const netWeight = document.getElementsByName("netWeight");
const netGoldConversion = document.getElementsByName("netGoldConversion");
const harry = document.getElementsByName("harry");
const purBox = document.getElementsByName(".purBox")

console.log(netGoldConversion);

const goldgleamBefore = document.querySelector(".goldgleamBefore"); // 매입전 순금량
const moneyBefore = document.querySelector(".moneyBefore"); // "" 금액
const stockGold = document.querySelector(".stockGold"); // 매입 순금량
const stockMoney = document.querySelector(".stockMoney"); // "" 금액
const paymentGold = document.querySelector(".paymentGold"); // 결제및반품 순금량
const paymentMoney = document.querySelector(".paymentMoney"); // "" 금액
const attemptGold = document.querySelector(".attemptGold"); // 매입후 순금량
const attemptMoney = document.querySelector(".attemptMoney"); // "" 금액

const quantity = document.getElementsByName("quantity"); // 수량
const unitPrice = document.getElementsByName("unitPrice"); // 단가
const supplyPrice = document.getElementsByName("supplyPrice"); // 공급가
const tariff = document.getElementsByName("tariff"); // 세율
const taxAmount = document.getElementsByName("taxAmount"); // 세액
const total = document.getElementsByName("total"); // 합계금액




const clickButton = document.querySelector("#clickButton");
const startsearch = document.querySelector(".startsearch");
const searcOrderhBox = document.querySelector(".searcOrderhBox");
const orderClose = document.querySelector(".orderClose");
const bgBg = document.querySelector("#bgBg");

const clientNum = document.querySelectorAll(".clientNum");

console.log(clientNum);
for (let i = 0; i < clientNum.length; i++) {
    clientNum[i].innerText = i + 1;
}



const openMenu = () => {
    startsearch.style.transition = "";
    startsearch.classList.add("on");
    searcOrderhBox.classList.add("on");
};

const closeMenu = () => {
    startsearch.style.transition = "height 0s .5s";
    startsearch.classList.remove("on");
    searcOrderhBox.classList.remove("on");
};


clickButton.addEventListener("click", openMenu);
bgBg.addEventListener("click", closeMenu);
orderClose.addEventListener("click", closeMenu);

for (let i = 0; i < material.length; i++) {
    let nGCNGC = 0;


    const netWeightX = () => {
        if (material[i].value === "순금-995" || material[i].value === "순금-999") {
            netGoldConversion[i].value = (content[i].value * netWeight[i].value).toFixed(4);
        } else {
            console.log(content[i].value * netWeight[i].value * harry[i].value);
            netGoldConversion[i].value = (content[i].value * netWeight[i].value * harry[i].value).toFixed(4);
        }
    };


    const materialChange = () => {
        console.log("안녕");
        if (material[i].value === "") {
            content[i].value = "";
            netWeightX();
        }
        if (material[i].value === "10K") {
            content[i].value = "0.4170";
            netWeightX();
        }
        if (material[i].value === "14K") {
            content[i].value = "0.5850";
            netWeightX();
        }
        if (material[i].value === "18K") {
            content[i].value = "0.7500";
            netWeightX();
        }
        if (material[i].value === "22K") {
            content[i].value = "0.9160";
            netWeightX();
        }
        if (material[i].value === "순금-995") {
            content[i].value = "1.0000";
            netWeightX();
        }
        if (material[i].value === "순금-999") {
            content[i].value = "1.0000";
            netWeightX();

        }
        if (material[i].value === "PT") {
            content[i].value = "0.0000";
            netWeightX();
        }
        if (material[i].value === "실버") {
            content[i].value = "0.0000";
            netWeightX();
        }
        if (material[i].value === "기타") {
            content[i].value = "";
            netWeightX();
        }
    };


    const netGoldConversionChange = () => {
        console.log("하이요");
    };

    const totalAmount = () => {
        supplyPrice[i].value = (quantity[i].value * unitPrice[i].value);
        if (tariff[i].value === "0") {
            taxAmount[i].value = 0;
        } else {
            taxAmount[i].value = (quantity[i].value * unitPrice[i].value) / tariff[i].value;
        }
        total[i].value = Number(taxAmount[i].value) + Number(supplyPrice[i].value);
    };

    const plsbtn = document.querySelector("#plsbtn");
    const tbody = document.querySelector("#tBody");

    const clickPlsbtn = () => {
        console.log("하요");

        const row = document.createElement("tr");

        const td1 = document.createElement("td");
        td1TdIn = '<button type="button" class="trsBTN"></button>';
        td1.insertAdjacentHTML("beforeEnd", td1TdIn);
        row.appendChild(td1);
        const td2 = document.createElement("td");
        td2TdIn = '<select name="purBox" class="purBox"><option value="매입">매입</option><option value="매입후결제">매입후결제</option><option value="결제">결제</option><option value="결통">결통</option><option value="반품">반품</option><option value="DC">DC</option></select>';
        td2.insertAdjacentHTML("beforeEnd", td2TdIn);
        row.appendChild(td2);
        const td3 = document.createElement("td");
        td3TdIn = '<select name="material" class="material"><option value=""></option><option value="10K">10K</option><option value="14K">14K</option><option value="18K">18K</option><option value="22K">22K</option><option value="순금=995">순금=995</option><option value="순금-999">순금-999</option><option value="실버">실버</option><option value="PT">PT</option><option value="기타">기타</option></select>';
        td3.insertAdjacentHTML("beforeEnd", td3TdIn);
        row.appendChild(td3);
        const td4 = document.createElement("td");
        td4TdIn = '<input type="number" name="content" class="purbox1111 content" autocomplete="off" disabled>';
        td4.insertAdjacentHTML("beforeEnd", td4TdIn);
        row.appendChild(td4);
        const td5 = document.createElement("td");
        td5TdIn = '<input type="number" name="netWeight">';
        td5.insertAdjacentHTML("beforeEnd", td5TdIn);
        row.appendChild(td5);
        const td6 = document.createElement("td");
        td6TdIn = '<select name="harry" class="harry"><option value="1.10">1.10</option><option value="1.09">1.09</option><option value="1.07">1.07</option><option value="1.06">1.06</option><option value="1.00">1.00</option></select>';
        td6.insertAdjacentHTML("beforeEnd", td6TdIn);
        row.appendChild(td6);
        const td7 = document.createElement("td");
        td7TdIn = '<input type="number" class="purbox1111" name="netGoldConversion" autocomplete="off" disabled>';
        td7.insertAdjacentHTML("beforeEnd", td7TdIn);
        row.appendChild(td7);
        const td8 = document.createElement("td");
        td8TdIn = '<input type="number" name="quantity" value="1">';
        td8.insertAdjacentHTML("beforeEnd", td8TdIn);
        row.appendChild(td8);
        const td9 = document.createElement("td");
        td9TdIn = '<input type="number" name="unitPrice">';
        td9.insertAdjacentHTML("beforeEnd", td9TdIn);
        row.appendChild(td9);
        const td10 = document.createElement("td");
        td10TdIn = '<input type="number" name="supplyPrice" class="purbox1111" autocomplete="off" disabled>';
        td10.insertAdjacentHTML("beforeEnd", td10TdIn);
        row.appendChild(td10);
        const td11 = document.createElement("td");
        td11TdIn = '<select name="tariff" class="tariff"><option value="0">0</option><option value="10">10</option></select>';
        td11.insertAdjacentHTML("beforeEnd", td11TdIn);
        row.appendChild(td11);
        const td12 = document.createElement("td");
        td12TdIn = '<input type="number" name="taxAmount" class="purbox1111" autocomplete="off" disabled>';
        td12.insertAdjacentHTML("beforeEnd", td12TdIn);
        row.appendChild(td12);
        const td13 = document.createElement("td");
        td13TdIn = '<input type="number" name="total" class="purbox1111" autocomplete="off" disabled>';
        td13.insertAdjacentHTML("beforeEnd", td13TdIn);
        row.appendChild(td13);
        const td14 = document.createElement("td");
        td14TdIn = '<input type="text" name="description">';
        td14.insertAdjacentHTML("beforeEnd", td14TdIn);
        row.appendChild(td14);


        tbody.appendChild(row);
        // const newRow = tbody.insertRow();

        // const newCell1 = newRow.insertCell(0);
        // const newCell2 = newRow.insertCell(1);
        // const newCell3 = newRow.insertCell(2);
        // const newCell4 = newRow.insertCell(3);
        // const newCell5 = newRow.insertCell(4);
        // const newCell6 = newRow.insertCell(5);
        // const newCell7 = newRow.insertCell(6);
        // const newCell8 = newRow.insertCell(7);
        // const newCell9 = newRow.insertCell(8);
        // const newCell10 = newRow.insertCell(9);
        // const newCell11 = newRow.insertCell(10);
        // const newCell12 = newRow.insertCell(11);
        // const newCell13 = newRow.insertCell(12);
        // const newCell14 = newRow.insertCell(13);

        // newCell1.innerHTML = '<button class="trsBTN"></button>';
        // newCell2.innerHTML = '<select name="purBox" class="purBox"><option value="매입">매입</option><option value="매입후결제">매입후결제</option><option value="결제">결제</option><option value="결통">결통</option><option value="반품">반품</option><option value="DC">DC</option></select>';
        // newCell3.innerHTML = '<select name="material" class="material"><option value=""></option><option value="10K">10K</option><option value="14K">14K</option><option value="18K">18K</option><option value="22K">22K</option><option value="순금=995">순금=995</option><option value="순금-999">순금-999</option><option value="실버">실버</option><option value="PT">PT</option><option value="기타">기타</option></select>';
        // newCell4.innerHTML = '<input type="number" name="content" class="purbox1111 content" autocomplete="off" disabled>';
        // newCell5.innerHTML = '<input type="number" name="netWeight">';
        // newCell6.innerHTML = '<select name="harry" class="harry"><option value="1.10">1.10</option><option value="1.09">1.09</option><option value="1.07">1.07</option><option value="1.06">1.06</option><option value="1.00">1.00</option></select>';
        // newCell7.innerHTML = '<input type="number" class="purbox1111" name="netGoldConversion" autocomplete="off" disabled>';
        // newCell8.innerHTML = '<input type="number" name="quantity" value="1">';
        // newCell9.innerHTML = '<input type="number" name="unitPrice">';
        // newCell10.innerHTML = '<input type="number" name="supplyPrice" class="purbox1111" autocomplete="off" disabled>';
        // newCell11.innerHTML = '<select name="tariff" class="tariff"><option value="0">0</option><option value="10">10</option></select>';
        // newCell12.innerHTML = '<input type="number" name="taxAmount" class="purbox1111" autocomplete="off" disabled>';
        // newCell13.innerHTML = '<input type="number" name="total" class="purbox1111" autocomplete="off" disabled>';
        // newCell14.innerHTML = '<input type="text" name="description">';

    };



    plsbtn.addEventListener("click", clickPlsbtn);


    material[i].addEventListener("change", materialChange);
    netWeight[i].addEventListener("change", netWeightX);
    harry[i].addEventListener("change", netWeightX);
    netGoldConversion[i].addEventListener("change", netGoldConversionChange);

    quantity[i].addEventListener("change", totalAmount);
    unitPrice[i].addEventListener("change", totalAmount);
    tariff[i].addEventListener("change", totalAmount);
}; //// for문
// window.plsbtnClick = plsbtnClick;
const purchaseBtn = document.querySelector("#purchaseBtn");

const submitEventGo = () => {
    for(let i=0; i<content.length; i++){
        content[i].disabled = false;
        netGoldConversion[i].disabled = false;
        supplyPrice[i].disabled = false;
        taxAmount[i].disabled = false;
        total[i].disabled = false;
    };
};


formPOST.addEventListener("submit", submitEventGo);










const calDeta = document.querySelector("#cal");


let today = new Date();
let KRDay = today.toLocaleDateString('ko-KR');
calDeta.value = KRDay;




$(function () { ////// jQ 시작

    $.datepicker.setDefaults({
        dateFormat: 'yy. m. d.',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });

    $('.ui-datepicker ').css({
        "margin-left": "141px",
        "margin-top": "-223px"
    }); //달력(calendar) 위치
    // $(function () {
    // });

    $("#cal").datepicker({
        beforeShow: function (input, inst) {
            let offset = $(input).offset();
            window.setTimeout(function () {
                $(inst.dpDiv).css({
                    "top": (offset.top - 70) + "px"
                })
            }, 1); ///setTimeout
        } /// beforeShow

    }); /// datepicker



});