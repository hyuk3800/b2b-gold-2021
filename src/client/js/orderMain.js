const orderNum = document.querySelectorAll(".orderNum");

for(let i=0; i<orderNum.length; i++){
    orderNum[i].innerText = (i + 1);
}


const calD1 = document.querySelector("#calD1");
const calD2 = document.querySelector("#calD2");

let today = new Date();
let KRDay = today.toLocaleDateString('ko-KR');
calD1.value = KRDay;
calD2.value = KRDay;

const clickAll = document.querySelector("#checkedAll");
const checkedThis = document.querySelectorAll(".checkedThis");

console.log(checkedThis);


let checkedTrue = 0;

for (let i = 0; i < checkedThis.length; i++) {
    const checkedThisTrueFalse = (e) => {
        console.log(e.target);

        if (e.target.checked) {
            // console.log(checkedThis.indexOf(e.target));
            checkedTrue++;
            console.log(checkedTrue);
        } else {
            checkedTrue--;
            console.log(checkedTrue);
        }
    }; /////checkedThisTrueFalse
    checkedThis[i].addEventListener('click', checkedThisTrueFalse);

}; //// for

// const indexInClass = (node) => {
//     for(let i=0; i<node.length; i++){
//         if(checkedThis[i] === node){
//             return i;
//         }else{
//             return -1;

//         }
//     };
// };

// alert("the id is" + indexInClass(checkedThis));




const clickAllCheckedThis = () => {
    if (clickAll.checked) {
        for (let i = 0; i < checkedThis.length; i++) {
            checkedThis[i].checked = true;
            checkedTrue = checkedThis.length;
        }
    } else {
        for (let i = 0; i < checkedThis.length; i++) {
            checkedThis[i].checked = false;
            checkedTrue = 0;
        }
    }

};

clickAll.addEventListener("click", clickAllCheckedThis);





const changesStart = document.querySelector(".changesStart");
const change1 = document.querySelector(".change1");
const change2 = document.querySelector(".change2");
const change3 = document.querySelector(".change3");
const change4 = document.querySelector(".change4");
const bgbg = document.querySelector("#bgbg");
const delBtn = document.querySelector("#delBtn");


const changeBtn1 = document.querySelector("#change1");
const changeBtn2 = document.querySelector("#change2");
const changeBtn3 = document.querySelector("#change3");
const changeBtn4 = document.querySelector("#change4");
const changeBtn5 = document.querySelector("#change5");
const changeBtn6 = document.querySelector("#change6");

const closeChangeBox = document.querySelectorAll(".closeChangeBox");

const change1On = () => {
    if (checkedTrue === 0) {
        alert("??????????????? ????????????.");
    } else {
        // console.log("Hi 1");
        change2.style.display =  "none";
        change3.style.display =  "none";
        change4.style.display =  "none";

        changesStart.style.transition = "";
        changesStart.classList.add("on");
        change1.classList.add("on");
    }
};
const change2On = () => {
    if (checkedTrue === 0) {
        alert("??????????????? ????????????.");
    } else {
        // console.log("Hi 2");
        change1.style.display =  "none";
        change3.style.display =  "none";
        change4.style.display =  "none";

        changesStart.style.transition = "";
        changesStart.classList.add("on");
        change2.classList.add("on");
    }
};
const change3On = () => {
    if (checkedTrue === 0) {
        alert("??????????????? ????????????.");
    } else {
        // console.log("Hi 3");
        change2.style.display =  "none";
        change1.style.display =  "none";
        change4.style.display =  "none";

        changesStart.style.transition = "";
        changesStart.classList.add("on");
        change3.classList.add("on");
    }
};
const change4On = () => {
    if (checkedTrue === 0) {
        alert("??????????????? ????????????.");
    } else {
        // console.log("Hi 4");
        change2.style.display =  "none";
        change3.style.display =  "none";
        change1.style.display =  "none";

        changesStart.style.transition = "";
        changesStart.classList.add("on");
        change4.classList.add("on");
    }
};


const checkCheckThis = (event) => {
    if (checkedTrue === 0) {
        event.preventDefault();
        alert("??????????????? ????????????.");
    // }else{
    //     if(){

    //     }else{

    //     }
    }
    
};

const releasedate = document.querySelectorAll(".releasedate"); // ?????????
const registrationdate = document.querySelectorAll(".registrationdate"); // ?????????
const registrationdateInput = document.getElementsByName("registrationdate");

console.log(releasedate,"?????????");
console.log(registrationdate,"?????????");





changeBtn1.addEventListener("click", change1On);
changeBtn2.addEventListener("click", change2On);
changeBtn3.addEventListener("click", change3On);
changeBtn4.addEventListener("click", change4On);
changeBtn5.addEventListener("click", checkCheckThis);
changeBtn6.addEventListener("click", checkCheckThis);
delBtn.addEventListener("click", checkCheckThis)

const OffchangeBoxs = () => {
    change1.style.display =  "block";
    change2.style.display =  "block";
    change3.style.display =  "block";
    change4.style.display =  "block";
    changesStart.style.transition = "height 0s .5s";
    changesStart.classList.remove("on");
    change1.classList.remove("on");
    change2.classList.remove("on");
    change3.classList.remove("on");
    change4.classList.remove("on");
};






bgbg.addEventListener("click", OffchangeBoxs);
for (let i = 0; i < closeChangeBox.length; i++) {
    closeChangeBox[i].addEventListener("click", OffchangeBoxs);
};


$(function () { ////////// jQ

    $.datepicker.setDefaults({
        dateFormat: 'yy. m. d.',
        prevText: '?????? ???',
        nextText: '?????? ???',
        monthNames: ['1???', '2???', '3???', '4???', '5???', '6???', '7???', '8???', '9???', '10???', '11???', '12???'],
        monthNamesShort: ['1???', '2???', '3???', '4???', '5???', '6???', '7???', '8???', '9???', '10???', '11???', '12???'],
        dayNames: ['???', '???', '???', '???', '???', '???', '???'],
        dayNamesShort: ['???', '???', '???', '???', '???', '???', '???'],
        dayNamesMin: ['???', '???', '???', '???', '???', '???', '???'],
        showMonthAfterYear: true,
        yearSuffix: '???'
    });

    $("#calD1").datepicker({
        beforeShow: function (input, inst) {
            let offset = $(input).offset();
            window.setTimeout(function () {
                $(inst.dpDiv).css({
                    "top": (offset.top - 120) + "px"
                })
            }, 1); ///setTimeout
        } /// beforeShow
    });
    $("#calD2").datepicker({
        beforeShow: function (input, inst) {
            let offset = $(input).offset();
            window.setTimeout(function () {
                $(inst.dpDiv).css({
                    "top": (offset.top - 120) + "px"
                })
            }, 1); ///setTimeout
        } /// beforeShow
    });

}); /////// jQ 