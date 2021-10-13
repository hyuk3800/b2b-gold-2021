window.onload = function () {
    const account = document.querySelectorAll(".account");
    const modelNumber = document.querySelectorAll(".modelNumber");
    const manufacturer = document.querySelectorAll(".manufacturer");

    const startsearch = document.querySelector(".startsearch");
    const orderClose = document.querySelectorAll(".orderClose");
    const bgBg = document.querySelector("#bgBg");
    const searcOrderhBox = document.querySelector(".searcOrderhBox");
    const searcModelhBox = document.querySelector(".searcModelhBox");
    const searchManuBox = document.querySelector(".searchManuBox");


    const clientNum = document.querySelectorAll(".clientNum");
    const clientNum2 = document.querySelectorAll(".clientNum2");


    for(let i=0; i<clientNum.length; i++){
        clientNum[i].innerText = i+1;
    }



    for(let i=0; i<clientNum2.length; i++){
        clientNum2[i].innerText = i+1;
    }








    for (let i = 0; i < account.length; i++) {
        const accountOpen = () => {
            searcModelhBox.style.display = "none";
            searchManuBox.style.display = "none";
            startsearch.classList.add("on");
            searcOrderhBox.classList.add("on");
            startsearch.style.transition = "";
        };
        account[i].addEventListener("click", accountOpen);
    };

    for (let i = 0; i < account.length; i++) {
        const modelNumberOpen = () => {
            searcOrderhBox.style.display = "none";
            searchManuBox.style.display = "none";
            startsearch.classList.add("on");
            searcModelhBox.classList.add("on");
            startsearch.style.transition = "";
        };
        modelNumber[i].addEventListener("click", modelNumberOpen);
    };


    for (let i = 0; i < manufacturer.length; i++) {
        const manufacturerOpen = () => {
            searcOrderhBox.style.display = "none";
            searcModelhBox.style.display = "none";
            startsearch.classList.add("on");
            searchManuBox.classList.add("on");
            startsearch.style.transition = "";
        };
        manufacturer[i].addEventListener("click", manufacturerOpen);
    };

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
    };

    bgBg.addEventListener("click", allCloseBtn);

    const goClient = document.querySelectorAll(".goClient");

    for (let i = 0; i < goClient.length; i++) {
        const goClientGO = () => {
            location.href = "/client";
        };


        goClient[i].addEventListener("click", goClientGO);
    }


    const plsbtn = document.querySelector("#plsbtn");
    const tbody = document.querySelector("#tbody");


    const plsbtnClick = () => {

        // console.log("안녕하신가? 후후후후후");
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

        newCell19.classList = "rightbutton";

        newCell1.innerHTML = '<button type="button" class="trsBTN"></button>';
        newCell2.innerHTML = '<input type="text" name="account"><button type="button" class="secbtn account"></button>';
        newCell3.innerHTML = '<input type="text" name="modelNumber"><button type="button" class="secbtn modelNumber"></button>';
        newCell4.innerHTML = '<input type="text" name="manufacturer"><button type="button" class="secbtn manufacturer"></button>';
        newCell5.innerHTML = '<select name="material" id="gramBox"><option value=""></option><option value="10K">10K</option><option value="14K">14K</option><option value="18K">18K</option><option value="22K">22K</option><option value="순금-995">순금-995</option><option value="순금-999">순금-999</option><option value="실버">실버</option><option value="PT">PT</option><option value="기타">기타</option></select>';
        newCell6.innerHTML = '<select name="color" id="color"><option value=""></option><option value="G">G</option><option value="G/B">G/B</option><option value="G/P">G/P</option><option value="G/R/W">G/R/W</option><option value="G/W">G/W</option><option value="P">P</option><option value="P/W">P/W</option><option value="P/블랙도금">P/블랙도금</option><option value="W">W</option><option value="W/B">W/B</option><option value="W/G">W/G</option><option value="W/P">W/P</option><option value="블랙">블랙</option></select>';
        newCell7.innerHTML = '<input type="number" name="quantity">';
        newCell8.innerHTML = '<input type="number" name="basicWage">';
        newCell9.innerHTML = '<input type="number" name="additionWage">';
        newCell10.innerHTML = '<input type="number" name="stoneWage1">';
        newCell11.innerHTML = '<input type="number" name="stoneWage2">';
        newCell12.innerHTML = '<input type="number" name="stoneQuantity">';
        newCell13.innerHTML = '<input type="number" name="stoneQuantity2">';
        newCell14.innerHTML = '<input type="number" name="stoneWeight3">';
        newCell15.innerHTML = '<input type="text" name="stoneName">';
        newCell16.innerHTML = '<input type="text" name="stoneName2">';
        newCell17.innerHTML = '<input type="text" name="size">';
        newCell18.innerHTML = '<input type="text" name="description">';
        newCell19.innerHTML = '<input type="text" class="cldbox1111" autocomplete="off" disabled><div class="calinder2">';

    };



    plsbtn.addEventListener("click", plsbtnClick);
    window.plsbtnClick = plsbtnClick;



    const formPOST = document.querySelector("#formPOST");
    const submitPOST = () => {
        // event.preventDefault();
        const trLength = document.querySelectorAll("#tbody tr");
        console.log("이거", trLength);
        typeinput = '<input name="dbtype" style="display: none" type="text" value="repair">';
        lengthinput = '<input name="lengthset" style="display: none" type="Number" value="' + trLength.length + '">'
        formPOST.insertAdjacentHTML('beforeEnd', lengthinput);
        formPOST.insertAdjacentHTML('beforeEnd', typeinput);
    };
    formPOST.addEventListener("submit", submitPOST)
    // window.submitPost = submitPost;


    const calDeta = document.querySelector("#calDeta");
    let cldbox1 = document.getElementsByClassName("cldbox1111");
    let cldbox = document.querySelector("#cldbox");


    let today = new Date();
    let KRDay = today.toLocaleDateString('ko-KR');
    calDeta.value = KRDay;

    console.log(cldbox1);

    const orderBtn = document.querySelector("#orderBtn");

    const inputDisabledOff = () => {
        // event.preventDefault();
        for (let i = 0; i < cldbox1.length; i++) {
            cldbox1[i].disabled = false;

        }
    };
    formPOST.addEventListener("submit", inputDisabledOff);

    let tomorrow = new Date(today.setDate(today.getDate() + 7));

    cldbox.value = tomorrow.toLocaleDateString('ko-KR');

    let cldboxval = cldbox.value;

    for (let i = 0; i < cldbox1.length; i++) {
        cldbox1[i].value = cldboxval;
    }

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


        $("#calDeta").datepicker({
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
        $(".cldbox1111").datepicker({
            showOn: "button",
            buttonImage: "../../../../static/images/calendar.png",

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
        $(".cldbox").datepicker({
            showOn: "button",
            buttonImage: "../../../../static/images/calendar.png",

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






    }); //// jQ 끝


}; /////// window.onload