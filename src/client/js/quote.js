const openButton = document.querySelector("#openButton");
const postForm = document.querySelector("#postForm");
const bgOff = document.querySelector("#bgOff");
const offButton = document.querySelector("#offButton");

const postBoxOn = () => {
    postForm.classList.add("on");
    postForm.style.transition = "";
};
const postBoxOff = () => {
    postForm.classList.remove("on");
    postForm.style.transition = "height 0s .5s";
};







openButton.addEventListener("click", postBoxOn);
bgOff.addEventListener("click", postBoxOff);
offButton.addEventListener("click", postBoxOff);

const quoteNum = document.querySelectorAll(".quoteNum");
for(let i=0; i<quoteNum.length; i++){
    quoteNum[i].innerText = i+1;
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