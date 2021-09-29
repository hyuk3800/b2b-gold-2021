const orderOnButton = document.querySelectorAll(".orderOnButton");
const modelOnButton = document.querySelectorAll(".modelOnButton");
const searchManuButton = document.querySelectorAll(".searchManuButton");
const startsearch = document.querySelector(".startsearch");
const orderClose = document.querySelectorAll(".orderClose");
const bgBg = document.querySelector("#bgBg");
const searcOrderhBox = document.querySelector(".searcOrderhBox");
const searcModelhBox = document.querySelector(".searcModelhBox");
const searchManuBox = document.querySelector(".searchManuBox");
for (let i = 0; i < orderOnButton.length; i++) {
    const openOrder = () => {
        searcModelhBox.style.display = "none";
        searchManuBox.style.display = "none";
        startsearch.classList.add("on");
        searcOrderhBox.classList.add("on");
        startsearch.style.transition = "";
    };
    orderOnButton[i].addEventListener("click", openOrder);
}; /////// for

for (let i = 0; i < modelOnButton.length; i++) {
    const openModel = () => {
        searcOrderhBox.style.display = "none";
        searchManuBox.style.display = "none";
        startsearch.classList.add("on");
        searcModelhBox.classList.add("on");
        startsearch.style.transition = "";
    };

    modelOnButton[i].addEventListener("click", openModel);
}

for (let i = 0; i < searchManuButton.length; i++) {
    const openClients = () => {
        searcOrderhBox.style.display = "none";
        searcModelhBox.style.display = "none";
        startsearch.classList.add("on");
        searchManuBox.classList.add("on");
        startsearch.style.transition = "";
    };

    searchManuButton[i].addEventListener("click", openClients)
}


for (let i = 0; i < orderClose.length; i++) {

    const closeOrderRemove = () => {
        startsearch.style.transition = "height 0s .5s";
        startsearch.classList.remove("on");
        searcOrderhBox.classList.remove("on");
        searcModelhBox.classList.remove("on");
        searchManuBox.classList.remove("on");
        setTimeout(function () {
            searcOrderhBox.style.display = "block";
            searcModelhBox.style.display = "block";
            searchManuBox.style.display = "block";
        }, 1000);

    };
    orderClose[i].addEventListener("click", closeOrderRemove);
}

const allCloseBtn = () => {
    startsearch.style.transition = "height 0s .5s";
    startsearch.classList.remove("on");
    searcOrderhBox.classList.remove("on");
    searcModelhBox.classList.remove("on");
    searchManuBox.classList.remove("on");

    setTimeout(function () {
        searcOrderhBox.style.display = "block";
        searcModelhBox.style.display = "block";
        searchManuBox.style.display = "block";
    }, 1000);
};


bgBg.addEventListener("click", allCloseBtn);







/////////////////////// 필터/////////////////


const ageBoxButton = document.querySelectorAll(".ageBox button");

let ageConter = [];
for (let i = 0; i < ageBoxButton.length; i++) {
    const ageButtonClickOnOff = (e) => {
        if (!e.target.classList.contains("on")) {
            e.target.classList.add("on");
            ageConter.push(e.target.value);
            console.log(ageConter);
        } else {
            e.target.classList.remove("on");
            ageConter.splice(ageConter.indexOf(e.target.value), 1);
            console.log(ageConter);
        }
    };
    ageBoxButton[i].addEventListener("click", ageButtonClickOnOff);
}; /////// for문

const necklaceBtn = document.querySelector("#necklace");
const earringBtn = document.querySelector("#earring");
const braceletBtn = document.querySelector("#bracelet");
const ankletBtn = document.querySelector("#anklet");
const ringBtn = document.querySelector("#ring");
const etcBtn = document.querySelector("#etc");

const necklaceSt = document.querySelector("#necklaceSt");
const earringSt = document.querySelector("#earringSt");
const braceletSt = document.querySelector("#braceletSt");
const ankletSt = document.querySelector("#ankletSt");
const ringSt = document.querySelector("#ringSt");
const etcSt = document.querySelector("#etcSt");

const styleBox = document.querySelectorAll(".styleBox");
const styleBoxButton = document.querySelectorAll(".styleBox button");
// const styleOnBoxButton = document.querySelectorAll(".styleBox.on button");

let partConter = [];

let styleConter = [];


const neckOn = () => {
    for (let i = 0; i < styleBoxButton.length; i++) {
        if (necklaceBtn.classList.contains("on")) {
            necklaceSt.classList.add("on");
            earringSt.classList.remove("on");
            braceletSt.classList.remove("on");
            ankletSt.classList.remove("on");
            ringSt.classList.remove("on");
            etcSt.classList.remove("on");
            styleBoxButton[i].classList.remove("on");
            styleConter = [];
        } else {
            necklaceSt.classList.remove("on");
            styleBoxButton[i].classList.remove("on");
            styleConter = [];
        }
    }; ////////for
};
const earringOn = () => {
    for (let i = 0; i < styleBoxButton.length; i++) {
        if (earringBtn.classList.contains("on")) {
            earringSt.classList.add("on");
            necklaceSt.classList.remove("on");
            braceletSt.classList.remove("on");
            ankletSt.classList.remove("on");
            ringSt.classList.remove("on");
            etcSt.classList.remove("on");
            styleBoxButton[i].classList.remove("on");
            styleConter = [];
        } else {
            earringSt.classList.remove("on");
            styleBoxButton[i].classList.remove("on");
            styleConter = [];
        }
    }; ////////for
};
const bracelOn = () => {
    for (let i = 0; i < styleBoxButton.length; i++) {
        if (braceletBtn.classList.contains("on")) {
            braceletSt.classList.add("on");
            earringSt.classList.remove("on");
            necklaceSt.classList.remove("on");
            ankletSt.classList.remove("on");
            ringSt.classList.remove("on");
            etcSt.classList.remove("on");
            styleBoxButton[i].classList.remove("on");
            styleConter = [];
        } else {
            braceletSt.classList.remove("on");
            styleBoxButton[i].classList.remove("on");
            styleConter = [];
        }
    }; ////////for
};
const ankletOn = () => {
    for (let i = 0; i < styleBoxButton.length; i++) {
        if (ankletBtn.classList.contains("on")) {
            ankletSt.classList.add("on");
            earringSt.classList.remove("on");
            braceletSt.classList.remove("on");
            necklaceSt.classList.remove("on");
            ringSt.classList.remove("on");
            etcSt.classList.remove("on");
            styleBoxButton[i].classList.remove("on");
            styleConter = [];
        } else {
            ankletSt.classList.remove("on");
            styleBoxButton[i].classList.remove("on");
            styleConter = [];
        }
    }; //////for
};
const ringOn = () => {
    for (let i = 0; i < styleBoxButton.length; i++) {
        if (ringBtn.classList.contains("on")) {
            ringSt.classList.add("on");
            earringSt.classList.remove("on");
            braceletSt.classList.remove("on");
            ankletSt.classList.remove("on");
            necklaceSt.classList.remove("on");
            etcSt.classList.remove("on");
            styleBoxButton[i].classList.remove("on");
            styleConter = [];
        } else {
            ringSt.classList.remove("on");
            styleBoxButton[i].classList.remove("on");
            styleConter = [];
        }
    }; /////////for
};
const etcOn = () => {
    for (let i = 0; i < styleBoxButton.length; i++) {
        if (etcBtn.classList.contains("on")) {
            etcSt.classList.add("on");
            earringSt.classList.remove("on");
            braceletSt.classList.remove("on");
            ankletSt.classList.remove("on");
            ringSt.classList.remove("on");
            necklaceSt.classList.remove("on");
            styleBoxButton[i].classList.remove("on");
            styleConter = [];
        } else {
            etcSt.classList.remove("on");
            styleBoxButton[i].classList.remove("on");
            styleConter = [];
        }
    }; //////// for
};



const necklaceBtnClick = (e) => {
    if (!e.target.classList.contains("on")) {
        e.target.classList.add("on");
        earringBtn.classList.remove("on");
        braceletBtn.classList.remove("on");
        ankletBtn.classList.remove("on");
        ringBtn.classList.remove("on");
        etcBtn.classList.remove("on");
        partConter = [];
        partConter.push(e.target.value);
        console.log(partConter);
    }
    neckOn();
};
const earringBtnClick = (e) => {
    if (!e.target.classList.contains("on")) {
        e.target.classList.add("on");
        necklaceBtn.classList.remove("on");
        braceletBtn.classList.remove("on");
        ankletBtn.classList.remove("on");
        ringBtn.classList.remove("on");
        etcBtn.classList.remove("on");
        partConter = [];
        partConter.push(e.target.value);
        console.log(partConter);
    }
    earringOn();
};
const braceletBtnClick = (e) => {
    if (!e.target.classList.contains("on")) {
        e.target.classList.add("on");
        earringBtn.classList.remove("on");
        necklaceBtn.classList.remove("on");
        ankletBtn.classList.remove("on");
        ringBtn.classList.remove("on");
        etcBtn.classList.remove("on");
        partConter = [];
        partConter.push(e.target.value);
        console.log(partConter);
    }
    bracelOn();
};
const ankletBtnClick = (e) => {
    if (!e.target.classList.contains("on")) {
        e.target.classList.add("on");
        earringBtn.classList.remove("on");
        braceletBtn.classList.remove("on");
        necklaceBtn.classList.remove("on");
        ringBtn.classList.remove("on");
        etcBtn.classList.remove("on");
        partConter = [];
        partConter.push(e.target.value);
        console.log(partConter);
    }
    ankletOn();
};
const ringBtnClick = (e) => {
    if (!e.target.classList.contains("on")) {
        e.target.classList.add("on");
        earringBtn.classList.remove("on");
        braceletBtn.classList.remove("on");
        ankletBtn.classList.remove("on");
        necklaceBtn.classList.remove("on");
        etcBtn.classList.remove("on");
        partConter = [];
        partConter.push(e.target.value);
        console.log(partConter);
    }
    ringOn();
};
const etcBtnClick = (e) => {
    if (!e.target.classList.contains("on")) {
        e.target.classList.add("on");
        earringBtn.classList.remove("on");
        braceletBtn.classList.remove("on");
        ankletBtn.classList.remove("on");
        ringBtn.classList.remove("on");
        necklaceBtn.classList.remove("on");
        partConter = [];
        partConter.push(e.target.value);
        console.log(partConter);
    }
    etcOn();
};


necklaceBtn.addEventListener("click", necklaceBtnClick);
earringBtn.addEventListener("click", earringBtnClick);
braceletBtn.addEventListener("click", braceletBtnClick);
ankletBtn.addEventListener("click", ankletBtnClick);
ringBtn.addEventListener("click", ringBtnClick);
etcBtn.addEventListener("click", etcBtnClick);

for (let i = 0; i < styleBoxButton.length; i++) {
    const styleBtnOnOff = (e) => {

        if (!e.target.classList.contains("on")) {
            // console.log("안녕하세요");
            e.target.classList.add("on");
            styleConter.push(e.target.value);
            console.log(styleConter);
        } else {
            e.target.classList.remove("on");
            styleConter.splice(styleConter.indexOf(e.target.value), 1);
            console.log(styleConter);
            // console.log("삭제한다");
            // styleBoxButton[i].classList.remove("on");
        }

    }; /////////styleBtnOnOff

    styleBoxButton[i].addEventListener("click", styleBtnOnOff)
}; ///////// fot문///////////////////////

const materialBtn = document.querySelectorAll(".materialBox button");
const weightBox = document.querySelector(".weightBox");

console.log(materialBtn);

let materialConter = [];

const weightBoxOn = () => {
    weightBox.classList.add("on");
};
const weightBoxOff = () => {
    weightBox.classList.remove("on");
};


for (let i = 0; i < materialBtn.length; i++) {

    const materialOnOff = (e) => {
        if (!e.target.classList.contains("on")) {
            e.target.classList.add("on");
            materialConter.push(e.target.value);
            console.log(materialConter);
            if (materialBtn[5].classList.contains("on") || materialBtn[6].classList.contains("on")) {
                weightBoxOn();
            }
        } else {
            e.target.classList.remove("on");
            materialConter.splice(materialConter.indexOf(e.target.value), 1);
            console.log(materialConter);
            if (!materialBtn[5].classList.contains("on") || !materialBtn[6].classList.contains("on")) {
                weightBoxOff();
            }
        }
    };
    materialBtn[i].addEventListener("click", materialOnOff);
}; /////// for 문

const weightBtn = document.querySelectorAll(".weightBox button");

console.log(weightBtn);

let weightConter = [];

for (let i = 0; i < weightBtn.length; i++) {
    const weightBtnClick = (e) => {
        if (!e.target.classList.contains("on")) {
            e.target.classList.add("on");
            weightConter.push(e.target.value);
            console.log(weightConter);
        } else {
            e.target.classList.remove("on");
            weightConter.splice(weightConter.indexOf(e.target.value), 1);
            console.log(weightConter);
        }
    };

    weightBtn[i].addEventListener("click", weightBtnClick);
}; //////for문


const filterButton = document.querySelector("#filterButton");
const mainck = document.querySelector(".mainck");

console.log(filterButton);

const filterOnOff = () => {
    mainck.classList.toggle("on");
};


filterButton.addEventListener("click", filterOnOff);

const modelNumber = document.getElementsByName("modelNumber");
const manufacturer = document.getElementsByName("manufacturer");
const cardname = document.querySelectorAll(".cardname span");
const clientsName = document.querySelectorAll(".clientsName");

let cardnameList = [];
let clientsList = [];


for (let i = 0; i < cardname.length; i++) {
    // console.log(String(cardname[i].innerText));
    cardnameList.push(cardname[i].innerText);
}

for (let i = 0; i < clientsName.length; i++) {
    clientsList.push(clientsName[i].innerText);
}

console.log(cardnameList);
console.log(clientsList);




for (let i = 0; i < modelNumber.length; i++) {
    const inputmodelNumber = (e) => {
        if (e.target.value) {
            console.log("안녕하세요", cardnameList.indexOf(e.target.value));
            if (cardnameList.indexOf(e.target.value) > -1) {

            } else {
                if (confirm("해당 모델번호는 존재하지 않습니다.등록하러 가시겠습니까?") === true) {
                    document.location.href = "/cataloge/upload";
                } else {
                    return false;
                }
            }
        }

    };

    modelNumber[i].addEventListener("change", inputmodelNumber);
};

for (let i = 0; i < manufacturer.length; i++) {

    const inputManufacturer = (e) => {
        if (e.target.value) {
            if (clientsList.indexOf(e.target.value) > -1) {

            } else {
                if (confirm("해당 제조사는 존재하지 않습니다.등록하러 가시겠습니까?") === true) {
                    document.location.href = "/client";
                } else {
                    return false;
                }
            }
        }
    };


    manufacturer[i].addEventListener("change", inputManufacturer)
}





const plsbtn = document.querySelector("#plsbtn");
const tbody = document.querySelector("#tbody");


const plusTableBody = () => {
    // location.reload(false);
    const newRow = tbody.insertRow();
    
    const newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);
    const newCell3 = newRow.insertCell(2);
    const newCell4 = newRow.insertCell(3);
    const newCell5 = newRow.insertCell(4);
    const newCell6 = newRow.insertCell(5);
    const newCell7 = newRow.insertCell(6);
    const newCell8 = newRow.insertCell(7);
    const newCell9 = newRow.insertCell(8);
    const newCell10 = newRow.insertCell(9);
    const newCell11 = newRow.insertCell(10);
    const newCell12 = newRow.insertCell(11);
    const newCell13 = newRow.insertCell(12);
    const newCell14 = newRow.insertCell(13);
    const newCell15 = newRow.insertCell(14);
    const newCell16 = newRow.insertCell(15);
    const newCell17 = newRow.insertCell(16);
    const newCell18 = newRow.insertCell(17);
    const newCell19 = newRow.insertCell(18);
    const newCell20 = newRow.insertCell(19);
    const newCell21 = newRow.insertCell(20);
    const newCell22 = newRow.insertCell(21);
    const newCell23 = newRow.insertCell(22);
    const newCell24 = newRow.insertCell(23);
    const newCell25 = newRow.insertCell(24);
    
    newCell1.innerHTML = `<button type="button" class="trsBTN onClick="deletRow()"></button>`;
    newCell2.innerHTML = `<input type="text" name="orderNumber"><button class="secbtn orderOnButton" type="button"></button>`;
    newCell3.innerHTML = `<input type="text" name="modelNumber"><button class="secbtn modelOnButton"  type="button"></button>`;
    newCell4.innerHTML = `<input type="text" name="manufacturer"><button class="secbtn searchManuButton"  type="button"></button>`;
    newCell5.innerHTML = `<select name="material" class="selBoxStock" id="gramBox"><option value=""></option><option value="10K">10K</option><option value="14K">14K</option><option value="18K">18K</option><option value="22K">22K</option><option value="순금-995">순금-995</option><option value="순금-999">순금-999</option><option value="실버">실버</option><option value="PT">PT</option><option value="기타">기타</option></select>`;
    newCell6.innerHTML = `<select name="color" class="selBoxStock" id="color"><option value=""></option><option value="G">G</option><option value="G/B">G/B</option><option value="G/P">G/P</option><option value="G/R/W">G/R/W</option><option value="G/W">G/W</option><option value="P">P</option><option value="P/W">P/W</option><option value="P/블랙도금">P/블랙도금</option><option value="W">W</option><option value="W/B">W/B</option><option value="W/G">W/G</option><option value="W/P">W/P</option><option value="블랙">블랙</option></select>`;
    newCell7.innerHTML = `<input type="number" name="quantity">`;
    newCell8.innerHTML = `<input type="number" name="basicWage">`;
    newCell9.innerHTML = `<input type="number" name="additionWage">`;
    newCell10.innerHTML = `<input type="number" name="stoneWage1">`;
    newCell11.innerHTML = `<input type="number" name="stoneWage2">`;
    newCell12.innerHTML = `<input type="number" name="stoneWeight3">`;
    newCell13.innerHTML = `<input type="number">`;
    newCell14.innerHTML = `<input type="number" disabled name="goldWeight">`;
    newCell15.innerHTML = `<input type="number" disabled name="stoneWeight">`;
    newCell16.innerHTML = `<select name="harry" class="selBoxStock" id="MAIPHARI"><option value="1.10">1.10</option><option value="1.09">1.09</option><option value="1.07">1.07</option><option value="1.06">1.06</option><option value="1.00">1.00</option></select>`;
    newCell17.innerHTML = `<input type="number" name="stoneQuantity">`;
    newCell18.innerHTML = `<input type="number" name="stoneQuantity2">`;
    newCell19.innerHTML = `<select name="unitPrice" class="selBoxStock" id="MAIPHARI"><option value="N">N</option><option value="Y">Y</option></select>`;
    newCell20.innerHTML = `<input type="text" name="stoneName">`;
    newCell21.innerHTML = `<input type="text" name="stoneName2">`;
    newCell22.innerHTML = `<input type="text" name="size">`;
    newCell23.innerHTML = `<input type="text" name="description">`;
    newCell24.innerHTML = `<input type="number" name="purchaseWage">`;
    newCell25.innerHTML = `<input type="number" name="eggPurchasePrice">`;
    
    
};


plsbtn.addEventListener("click", plusTableBody);

function deletRow() {
    tbody.removeChild(tbody.childNodes[tbody.childNoders.length]);
};
window.deletRow = deletRow;



/////////////     달력 //////////////////////

const mainDatepicker = document.querySelector("#datepicker");
const orderCldbox = document.querySelector("#orderCldbox2");

let today = new Date();
let KRDay = today.toLocaleDateString('ko-KR');
mainDatepicker.value = KRDay;
orderCldbox.value = KRDay;

//ui-datepicker-trigger
//ui-datepicker-trigger

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

    // $(function () {
    // });


    $("#datepicker").datepicker({
        beforeShow: function (input, inst) {
            let offset = $(input).offset();
            window.setTimeout(function () {
                $(inst.dpDiv).css({
                    "top": (offset.top - 70) + "px"
                })
            }, 1); ///setTimeout
        } /// beforeShow

    }); /// datepicker
    // $(".cldbox1111").datepicker("setDate", "+7d");
    $("#cldbox").datepicker({
        showOn: "both",


        beforeShow: function (input, inst) {
            let offset = $(input).offset();
            let height = $(input).height();

            window.setTimeout(function () {
                $(inst.dpDiv).css({
                    "top": (offset.top - 77) + "px"
                })
            }, 1); ///setTimeout
        } /// beforeShow
    }); // datepicker




    $("#orderCldbox1").datepicker({
        showOn: "both",
        buttonImage: "../../static/images/calendar.png",

        beforeShow: function (input, inst) {
            // let offset = $(input).offset();
            // let height = $(input).height();
            var i_offset = jQuery(input).offset();

            window.setTimeout(function () {
                $(inst.dpDiv).css({
                        // "top": (offset.top - 77) + "px",
                        // "width": "40px"
                    }),
                    $('ui-datepicker-trigger').css({
                        'width': '40px',
                    }) //아이콘(icon) 위치
            }, 1); ///setTimeout
        } /// beforeShow
    }); // datepicker
    $("#orderCldbox2").datepicker({
        showOn: "both",
        buttonImage: "../../static/images/calendar.png",

        beforeShow: function (input, inst) {
            let offset = $(input).offset();
            let height = $(input).height();

            window.setTimeout(function () {
                $(inst.dpDiv).css({
                    // "top": (offset.top - 77) + "px"
                })
            }, 1); ///setTimeout
        } /// beforeShow
    }); // datepicker






}); //// jQ 끝