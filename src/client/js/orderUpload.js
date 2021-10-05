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

    console.log(account)

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
    orderClose[i].addEventListener("click",closeOrderRemove);
    };

    bgBg.addEventListener("click", allCloseBtn);

    const goClient = document.querySelectorAll(".goClient");

    for(let i=0; i<goClient.length; i++){
        const goClientGO = () =>{
            location.href="/client";
        };


        goClient[i].addEventListener("click", goClientGO);
    }

    const formPOST = document.querySelector("#formPOST");
    const trLength = document.querySelectorAll("#tbody tr");

    const submitPost = (event) => {
        // event.preventDefault();
        console.log("이거", trLength);
        let Length = trLength.length;
        lengthinput = '<input name="lengthset" style="display: none" type="Number" value="' + Length + '">'
        formPOST.insertAdjacentHTML('beforeEnd', lengthinput)
    };  

    window.submitPost = submitPost;

    formPOST.addEventListener("submit", submitPost);


    const plsbtn = document.querySelector('#plsbtn');
    const tbody = document.querySelector('#tbody');


    const plsbtnClick = () => {
        console.log("hi");
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



        newCell1.innerHTML = '<button class="trsBTN"></button>';
        newCell2.innerHTML = '<input type="text"><button class="secbtn"></button>';
        newCell3.innerHTML = '<input type="text"><button class="secbtn"></button>';
        newCell4.innerHTML = '<input type="text"><button class="secbtn"></button>';
        newCell5.innerHTML = '<select name="gramBox" id="gramBox"><option value=""></option><option value="10K">10K</option><option value="14K">14K</option><option value="18K">18K</option><option value="22K">22K</option><option value="순금-995">순금-995</option><option value="순금-999">순금-999</option><option value="실버">실버</option><option value="PT">PT</option><option value="기타">기타</option></select>';
        newCell6.innerHTML = '<select name="color" id="color"><option value=""></option><option value="G">G</option><option value="G/B">G/B</option><option value="G/P">G/P</option><option value="G/R/W">G/R/W</option><option value="G/W">G/W</option><option value="P">P</option><option value="P/W">P/W</option><option value="P/블랙도금">P/블랙도금</option><option value="W">W</option><option value="W/B">W/B</option><option value="W/G">W/G</option><option value="W/P">W/P</option><option value="블랙">블랙</option></select>';
        newCell7.innerHTML = '<input type="text">';
        newCell8.innerHTML = '<input type="text">';
        newCell9.innerHTML = '<input type="text">';
        newCell10.innerHTML = '<input type="text">';
        newCell11.innerHTML = '<input type="text">';
        newCell12.innerHTML = '<input type="text">';
        newCell13.innerHTML = '<input type="text">';
        newCell14.innerHTML = '<input type="text">';
        newCell15.innerHTML = '<input type="text">';
        newCell16.innerHTML = '<input type="text">';
        newCell17.innerHTML = '<input type="text">';
        newCell18.innerHTML = '<input type="text">';
        newCell19.innerHTML = '<input type="text" class="cldbox1111" autocomplete="off" disabled><div class="calinder2"><img src="../../../../static/images/calendar.png" alt="calendar"></div>';


    };



    plsbtn.addEventListener("click", plsbtnClick);
    window.plsbtnClick = plsbtnClick;





    const calData = document.querySelector(".calData");
    let cldbox1 = document.getElementsByClassName("cldbox1111");
    let cldbox = document.querySelector("#cldbox");


    let today = new Date();
    let KRDay = today.toLocaleDateString('ko-KR');
    calData.value = KRDay;


    let tomorrow = new Date(today.setDate(today.getDate() + 7));



    const inputChinge = (e) => {
        console.log("안녕");
    };

    calData.addEventListener("input", inputChinge)

    cldbox.value = tomorrow.toLocaleDateString('ko-KR');

    let cldboxval = cldbox.value;

    // console.log(cldboxval);

    calData.onclick = function () {
        console.log("됬냐?");
    }

    // console.log("내일 : ", tomorrow.toLocaleDateString('ko-KR'));
    for (let i = 0; i < cldbox1.length; i++) {
        cldbox1[i].value = cldboxval;
    }

    // let cldboxTop = [];

    // for (let i = 0; i < cldbox.length; i++) {
    //     cldboxTop = cldbox[i].getBoundingClientRect().bottom;
    // }
    // console.log(cldboxTop);


    // const cldboxChanges = () => {
    //     console.log("dododododododod");
    //     // for(let i=0; i<cldbox1.length; i++){
    //     //     cldbox1[i].value = cldbox.value;
    //     // }
    // };



    // cldbox.addEventListener("change", cldboxChanges);


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






    }); //// jQ 끝

}