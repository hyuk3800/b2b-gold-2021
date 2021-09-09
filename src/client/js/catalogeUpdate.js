window.onload = function () {





    // 일단 버튼 클릭시 on이 되게 하자

    const ageBoxButton = document.querySelectorAll(".ageBox button")

    console.log(ageBoxButton);

    let ageConter = [];
    for (let i = 0; i < ageBoxButton.length; i++) {
        const ageBoxButtonOnOff = (e) => {
            if (!e.target.classList.contains("on")) {
                if (ageConter.length < 2) {
                    e.target.classList.add("on");
                    ageConter.push("counting");
                    console.log(ageConter);
                } else {
                    console.log(ageConter);
                    alert("나이대는 최대 2개까지 선택가능합니다.");
                }
            } else {
                e.target.classList.remove("on");
                ageConter.shift()
                console.log(ageConter);
            }

        };
        ageBoxButton[i].addEventListener("click", ageBoxButtonOnOff);

    }; //// 버튼 클릭시 on 그리고 2개이상 클릭시 클릭불가 alert

    const necklaceBtn = document.querySelector("#necklace");
    const earringBtn = document.querySelector("#earring");
    const braceletBtn = document.querySelector("#bracelet");
    const ankletBtn = document.querySelector("#anklet");
    const ringBtn = document.querySelector("#ring");
    const etcBtn = document.querySelector("#etc");


    const necklaceBtnClick = (e) => {
        if (!e.target.classList.contains("on")) {
            e.target.classList.add("on");
            earringBtn.classList.remove("on");
            braceletBtn.classList.remove("on");
            ankletBtn.classList.remove("on");
            ringBtn.classList.remove("on");
            etcBtn.classList.remove("on");
        } else {
            e.target.classList.remove("on");
        }
    };
    const earringBtnClick = (e) => {
        if (!e.target.classList.contains("on")) {
            e.target.classList.add("on");
            necklaceBtn.classList.remove("on");
            braceletBtn.classList.remove("on");
            ankletBtn.classList.remove("on");
            ringBtn.classList.remove("on");
            etcBtn.classList.remove("on");
        } else {

            e.target.classList.remove("on");
        }
    };
    const braceletBtnClick = (e) => {
        if (!e.target.classList.contains("on")) {
            e.target.classList.add("on");
            earringBtn.classList.remove("on");
            necklaceBtn.classList.remove("on");
            ankletBtn.classList.remove("on");
            ringBtn.classList.remove("on");
            etcBtn.classList.remove("on");
        } else {

            e.target.classList.remove("on");
        }
    };
    const ankletBtnClick = (e) => {
        if (!e.target.classList.contains("on")) {
            e.target.classList.add("on");
            earringBtn.classList.remove("on");
            braceletBtn.classList.remove("on");
            necklaceBtn.classList.remove("on");
            ringBtn.classList.remove("on");
            etcBtn.classList.remove("on");
        } else {

            e.target.classList.remove("on");
        }
    };
    const ringBtnClick = (e) => {
        if (!e.target.classList.contains("on")) {
            e.target.classList.add("on");
            earringBtn.classList.remove("on");
            braceletBtn.classList.remove("on");
            ankletBtn.classList.remove("on");
            necklaceBtn.classList.remove("on");
            etcBtn.classList.remove("on");
        } else {

            e.target.classList.remove("on");
        }
    };
    const etcBtnClick = (e) => {
        if (!e.target.classList.contains("on")) {
            e.target.classList.add("on");
            earringBtn.classList.remove("on");
            braceletBtn.classList.remove("on");
            ankletBtn.classList.remove("on");
            ringBtn.classList.remove("on");
            necklaceBtn.classList.remove("on");
        } else {

            e.target.classList.remove("on");
        }
    };






    necklaceBtn.addEventListener("click", necklaceBtnClick);
    earringBtn.addEventListener("click", earringBtnClick);
    braceletBtn.addEventListener("click", braceletBtnClick);
    ankletBtn.addEventListener("click", ankletBtnClick);
    ringBtn.addEventListener("click", ringBtnClick);
    etcBtn.addEventListener("click", etcBtnClick);


    const styleBox = document.querySelectorAll(".styleBox");
    const styleBoxButton = document.querySelectorAll(".styleBox button");
    const styleOnBoxButton = document.querySelectorAll(".styleBox.on button");

    console.log(styleBox);
    console.log(styleOnBoxButton);

    //stylebox의 class에 on이 사라질시 

    for (let i = 0; i < styleBox.length; i++) {
        styleBox[i].classList.contains("on")
    }


























    // const stoneBtn = document.querySelector("#stoneClickBtn");
    // const stoneTbody = document.querySelector("#stoneTbody");
    // const stoneDelete = document.querySelector("#stoneDelete");


    // const stoneTableUp = () => {
    //     console.log("시작한다");
    //     const newRow = stoneTbody.insertRow(); 

    //     const newCell1 = newRow.insertCell(0);
    //     const newCell2 = newRow.insertCell(1);
    //     const newCell3 = newRow.insertCell(2);
    //     const newCell4 = newRow.insertCell(3);
    //     const newCell5 = newRow.insertCell(4);
    //     const newCell6 = newRow.insertCell(5);
    //     const newCell7 = newRow.insertCell(6);
    //     const newCell8 = newRow.insertCell(7);
    //     const newCell9 = newRow.insertCell(8);
    //     const newCell10 = newRow.insertCell(9);


    //     newCell1.innerHTML = "<div><input type='text' placeholder='스톤명'><img class='sltImg' src='../../../../static/images/ic-zoom-in-24-px@3x.png' alt='검색'></div>";
    //     newCell2.innerHTML = '<div><input type="text" placeholder="수량"></div>';
    //     newCell3.innerHTML = '<div><input type="text" placeholder="설명"></div>';
    //     newCell4.innerHTML = '<div><input type="text" placeholder="중량(개당)"></div>';
    //     newCell5.innerHTML = '<div><input type="text" placeholder="중량(총중량)"></div>';
    //     newCell6.innerHTML = '<div><input type="text" placeholder="매입단가(개당)"></div>';
    //     newCell7.innerHTML = '<div><input type="text" placeholder="매입단가(총가격)"></div>';
    //     newCell8.innerHTML = '<div><input type="text" placeholder="판매단가(개당)"></div>';
    //     newCell9.innerHTML = '<div><input type="text" placeholder="판매단가(총가격)"></div>';
    //     newCell10.innerHTML = '<button type="button", onclick="dd(e)" id="stoneDelete">삭제</button>';
    // };

    // // const stoneTableDel = (-1) => {
    // //     console.log("지운다!");
    // //     stoneTbody.deleteRow(-1);
    // // };


    //  stoneBtn.addEventListener("click", stoneTableUp);

    //  stoneDelete.addEventListener("click", stoneTableDel);

}
// function stoneTableDel(){
//     console.log("지운다!");
// function dd() {console.log("되라씨"); }
//     // stoneTbody.deleteRow(e);
// };
// table element 찾기

// const table = document.getElementById('stoneTbody');

// // 새 행(Row) 추가
// const newRow = table.insertRow();

// // 새 행(Row)에 Cell 추가
// const newCell1 = newRow.insertCell(0);
// const newCell2 = newRow.insertCell(1);

// // Cell에 텍스트 추가
// newCell1.innerText = '새 과일';
// newCell2.innerText = 'New Fruit';