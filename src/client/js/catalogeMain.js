const cardBro = document.querySelector(".card_bro");
const tableBro = document.querySelector(".table_bro");
const on = "on";
const mainContainerCard = document.querySelector(".mainContainerCard");
const mainContTable = document.querySelector(".mainContTable");

const wageboxcent = document.querySelector("#wageboxcent");
const offbutton = document.querySelector("#offbutton");
const onbutton = document.querySelector("#onbutton");
const wagebox = document.querySelector("#wagebox");

const clickAndChack = document.querySelector(".clickAndChack");
const clickThis = document.getElementsByClassName('clickThis');

// console.log(
//     cardBro,
//     tableBro,
//     on,
//     mainContainerCard,
//     mainContTable,
// );

const cardBroBtnClick = () => {
    if (!cardBro.classList.contains(on)) {
        cardBro.classList.toggle(on);
        tableBro.classList.toggle(on);
        mainContainerCard.classList.toggle(on);
        mainContTable.classList.toggle(on);
        clickAndChack.classList.toggle("off");
    }
};

const tableBroBtnClick = () => {
    if (!tableBro.classList.contains(on)) {
        cardBro.classList.toggle(on);
        tableBro.classList.toggle(on);
        mainContainerCard.classList.toggle(on);
        mainContTable.classList.toggle(on);
        clickAndChack.classList.toggle("off");
    }
};

cardBro.addEventListener("click", cardBroBtnClick);
tableBro.addEventListener("click", tableBroBtnClick);



// 체크박스 체크가 있을시에만 공임변경창 나오게하기
for (let i = 0; i < clickThis.length; i++) {
    const checkedTrueFalse = (e) => {
        // console.log(clickThis[i].value);
        console.log(e.target.checked);
        // console.log(e, "이거슨");

        if (e.target.checked) {
            //    console.log(clickThis.value.find(e.target.value));

            const wageBoxOn = () => {
                wagebox.classList.add("on");
                console.log("hihi")
                wagebox.style.transition = "";
                // if(e.target.value === clickThis[i].value){

                // }
            };
            const wageBoxOff = () => {
                wagebox.classList.remove("on");
                console.log("hihi")
                wagebox.style.transition = "height 0s .5s";
                // if(e.target.value === clickThis[i].value){

                // }
            };
            offbutton.addEventListener("click", wageBoxOff);
            onbutton.addEventListener("click", wageBoxOn);
            wageboxcent.addEventListener("click", wageBoxOff);
        }
        console.log("hi");

    };
    // console.log(clickThis.length);

    clickThis[i].addEventListener("click", checkedTrueFalse);
}



const checkThisAll = () => {
    // console.log("누름");
    if (clickAndChack.classList.contains("on") === false) {
        clickAndChack.classList.toggle("on");
        for (let i = 0; i < clickThis.length; i++) {
            clickThis[i].checked = true;
        }
    } else {
        // console.log("안녕?")
        clickAndChack.classList.toggle("on");
        for (let i = 0; i < clickThis.length; i++) {
            clickThis[i].checked = false;
        }
    }


};



clickAndChack.addEventListener("click", checkThisAll);


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
};/////// for문

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
                    if(materialBtn[5].classList.contains("on") || materialBtn[6].classList.contains("on")){
                        weightBoxOn();
                    }
            } else {
                e.target.classList.remove("on");
                materialConter.splice(materialConter.indexOf(e.target.value), 1);
                console.log(materialConter);
                    if(!materialBtn[5].classList.contains("on") || !materialBtn[6].classList.contains("on")){
                        weightBoxOff();
                    }
            }
        };
        materialBtn[i].addEventListener("click", materialOnOff);
    }; /////// for 문

    const weightBtn = document.querySelectorAll(".weightBox button");

    console.log(weightBtn);

    let weightConter = [];

    for(let i=0; i<weightBtn.length; i++){
        const weightBtnClick = (e) =>{
            if(!e.target.classList.contains("on")){
                e.target.classList.add("on");
                weightConter.push(e.target.value);
                console.log(weightConter);
            }else{
                e.target.classList.remove("on");
                weightConter.splice(weightConter.indexOf(e.target.value), 1);
                console.log(weightConter);
            }
        };

        weightBtn[i].addEventListener("click", weightBtnClick);
    };//////for문

    
const filterButton = document.querySelector("#filterButton");
const mainck = document.querySelector(".mainck");

console.log(filterButton);

const filterOnOff = () =>{
    mainck.classList.toggle("on");
};


filterButton.addEventListener("click", filterOnOff);