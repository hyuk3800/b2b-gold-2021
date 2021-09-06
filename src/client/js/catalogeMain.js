const cardBro = document.querySelector(".card_bro");
const tableBro = document.querySelector(".table_bro");
const on = "on";
const mainContainerCard = document.querySelector(".mainContainerCard");
const mainContTable = document.querySelector(".mainContTable");

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
    }
};

const tableBroBtnClick = () => {
    if (!tableBro.classList.contains(on)) {
        cardBro.classList.toggle(on);
        tableBro.classList.toggle(on);
        mainContainerCard.classList.toggle(on);
        mainContTable.classList.toggle(on);
    }
};

cardBro.addEventListener("click", cardBroBtnClick);
tableBro.addEventListener("click", tableBroBtnClick);


const wageboxcent = document.querySelector("#wageboxcent");
const offbutton = document.querySelector("#offbutton");
const onbutton = document.querySelector("#onbutton");
const wagebox = document.querySelector("#wagebox");

const clickThis = document.getElementsByClassName('clickThis');


// 체크박스 체크가 있을시에만 공임변경창 나오게하기
for (let i = 0; i < clickThis.length; i++) {
    const checkedTrueFalse = (e) => {
    // console.log(clickThis[i].value);
    console.log(e.target.checked);
        // console.log(e, "이거슨");
        
        if (e.target.checked) {
            const wageBoxOnOff = () => {
                wagebox.classList.toggle("on");
                console.log("hihi")
            };
                offbutton.addEventListener("click", wageBoxOnOff);
                onbutton.addEventListener("click", wageBoxOnOff);
                wageboxcent.addEventListener("click", wageBoxOnOff);
        }
        console.log("hi");

    };
    // console.log(clickThis.length);

    clickThis[i].addEventListener("click", checkedTrueFalse);
}