const repairNum = document.querySelectorAll(".repairNum");

for (let i = 0; i < repairNum.length; i++) {
    repairNum[i].innerText = i + 1;
};


const clickAll = document.querySelector("#checkedAll");
const checkedThis = document.querySelectorAll(".checkedThis");

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




const changesStart = document.querySelector(".changesStart");
const bgbg = document.querySelector("#bgbg");
const closeChangeBox = document.querySelectorAll(".closeChangeBox");


const change1 = document.querySelector(".change1");
const change2 = document.querySelector(".change2");
const change3 = document.querySelector(".change3");
const change4 = document.querySelector(".change4");


const chang1Btn = document.querySelector("#chang1");
const chang2Btn = document.querySelector("#chang2");
const chang3Btn = document.querySelector("#chang3");
const chang4Btn = document.querySelector("#chang4");
const chang5Btn = document.querySelector("#chang5");
const chang6Btn = document.querySelector("#chang6");
const delBtn = document.querySelector("#delBtn");



const chang1BtnClickOn = () => {
    if (checkedTrue === 0) {
        // event.preventDefault();
        alert("체크된것이 없습니다.");
    } else {
        change2.style.display = "none";
        change3.style.display = "none";
        change4.style.display = "none";

        changesStart.style.transition = "";
        changesStart.classList.add("on");
        change1.classList.add("on");
    }
};

const chang2BtnClickOn = () => {
    if (checkedTrue === 0) {
        // event.preventDefault();
        alert("체크된것이 없습니다.");
    } else {
        change1.style.display = "none";
        change3.style.display = "none";
        change4.style.display = "none";

        changesStart.style.transition = "";
        changesStart.classList.add("on");
        change2.classList.add("on");
    }
};

const chang3BtnClickOn = () => {
    if (checkedTrue === 0) {
        // event.preventDefault();
        alert("체크된것이 없습니다.");
    } else {
        change2.style.display = "none";
        change1.style.display = "none";
        change4.style.display = "none";

        changesStart.style.transition = "";
        changesStart.classList.add("on");
        change3.classList.add("on");
    }
};

const chang4BtnClickOn = () => {
    if (checkedTrue === 0) {
        // event.preventDefault();
        alert("체크된것이 없습니다.");
    } else {
        change2.style.display = "none";
        change3.style.display = "none";
        change1.style.display = "none";

        changesStart.style.transition = "";
        changesStart.classList.add("on");
        change4.classList.add("on");
    }
};

const OffchangeBoxs = () => {
    change1.style.display = "block";
    change2.style.display = "block";
    change3.style.display = "block";
    change4.style.display = "block";
    changesStart.style.transition = "height 0s .5s";
    changesStart.classList.remove("on");
    change1.classList.remove("on");
    change2.classList.remove("on");
    change3.classList.remove("on");
    change4.classList.remove("on");
};

const checkCheckThis = (event) => {
    if (checkedTrue === 0) {
        event.preventDefault();
        alert("체크된것이 없습니다.");
    }
};




chang1Btn.addEventListener("click", chang1BtnClickOn);
chang2Btn.addEventListener("click", chang2BtnClickOn);
chang3Btn.addEventListener("click", chang3BtnClickOn);
chang4Btn.addEventListener("click", chang4BtnClickOn);

bgbg.addEventListener("click", OffchangeBoxs);
for (let i = 0; i < closeChangeBox.length; i++) {
    closeChangeBox[i].addEventListener("click", OffchangeBoxs);
};

chang5Btn.addEventListener("click", checkCheckThis);
chang6Btn.addEventListener("click", checkCheckThis);
delBtn.addEventListener("click", checkCheckThis);


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



$(function () { ////////// jQ

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