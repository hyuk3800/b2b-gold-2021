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

            const wageBoxOnOff = () => {
                wagebox.classList.toggle("on");
                console.log("hihi")
            // if(e.target.value === clickThis[i].value){
                
            // }
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



const checkThisAll = () => {
    // console.log("누름");
    if(clickAndChack.classList.contains("on") === false){
            clickAndChack.classList.toggle("on");
            for(let i=0; i<clickThis.length; i++){
                clickThis[i].checked = true;
            }
        }else{
            // console.log("안녕?")
            clickAndChack.classList.toggle("on");
            for(let i=0; i<clickThis.length; i++){
                clickThis[i].checked = false;
            }
        }
    
    
};






clickAndChack.addEventListener("click", checkThisAll);
allClickBtnOff()

