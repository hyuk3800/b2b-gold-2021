const changesStart = document.querySelector(".changesStart");
const changesStartButton = document.querySelector("#changesStart");
const closeChangeBox = document.querySelector("#closeChangeBox");
const bgbg = document.querySelector("#bgbg ");
const checkedThis = document.querySelectorAll(".checkedThis")

let checkedTrue = 0;

for (let i = 0; i < checkedThis.length; i++) {
    const checkedThisTrueFalse = (e) => {
        console.log(e.target.checked);

        if (e.target.checked) {
            checkedTrue++;
            console.log(checkedTrue);
        } else {
            checkedTrue--;
            console.log(checkedTrue);
        }
    }; /////checkedThisTrueFalse
    checkedThis[i].addEventListener('click', checkedThisTrueFalse);

}; //// for

// if (checkedTrue === 0) {
//     const changesStartNotOpen = () => {
//         alert("체크된것이 없습니다.")
//         console.log(checkedTrue);
//     }

const changesStartNotOpen = () => {
    if (checkedTrue === 0) {
        alert("체크된것이 없습니다.")
    } else {
        changesStart.style.transition = "";
        changesStart.classList.add("on");
    }
};


changesStartButton.addEventListener("click", changesStartNotOpen);

// }else{
//     const changesStartOpen = () => {
//         changesStart.style.transition = "";
//         changesStart.classList.add("on");
//     };

// changesStartButton.addEventListener("click", changesStartOpen);
// }


const changeBoxClose = () => {
    changesStart.style.transition = "height 0s .5s";
    changesStart.classList.remove("on");
}

closeChangeBox.addEventListener("click", changeBoxClose);
bgbg.addEventListener("click", changeBoxClose);