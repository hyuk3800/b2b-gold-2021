const changesStart = document.querySelector(".changesStart");
const changesStartButton = document.querySelector("#changesStart");
const closeChangeBox = document.querySelector("#closeChangeBox");
const bgbg = document.querySelector("#bgbg ");

const checkedThis = document.querySelectorAll(".checkedThis");
const saleBtn = document.querySelector("#saleBtn");
const rentBtn = document.querySelector("#rentBtn");
const deleteBtn = document.querySelector("#deleteBtn");

const checkedAll = document.querySelector("#checkedAll");

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

const changesStartNotOpen = () => {
    if (checkedTrue === 0) {
        alert("체크된것이 없습니다.")
    } else {
        changesStart.style.transition = "";
        changesStart.classList.add("on");
    }
};


changesStartButton.addEventListener("click", changesStartNotOpen);

const changeBoxClose = () => {
    changesStart.style.transition = "height 0s .5s";
    changesStart.classList.remove("on");
}

closeChangeBox.addEventListener("click", changeBoxClose);
bgbg.addEventListener("click", changeBoxClose);


const checkedAllOff = (event) => {
    if(checkedTrue === 0){
        event.preventDefault();
        alert("체크된것이 없습니다.")
    }
};


saleBtn.addEventListener("click", checkedAllOff);
rentBtn.addEventListener("click", checkedAllOff);
deleteBtn.addEventListener("click", checkedAllOff);


const checkedAllOnOff = () => {
    if(checkedAll.checked){
        // console.log("된다")
        for(let i=0; i<checkedThis.length; i++){
            checkedThis[i].checked = true;
            checkedTrue = checkedThis.length;
        }
    }else{
        for(let i=0; i<checkedThis.length; i++){
            checkedThis[i].checked = false;
            checkedTrue = 0;
        }   
    }
};

checkedAll.addEventListener("click", checkedAllOnOff);





// 달력

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