window.onload = function () {

    //일단 되게 하고 코드 는 나중에 줄일 수 있으면 줄이자


    const ageBoxButton = document.querySelectorAll(".ageBox button")

    // console.log(ageBoxButton);

    let ageConter = [];
    for (let i = 0; i < ageBoxButton.length; i++) {
        const ageBoxButtonOnOff = (e) => {
            if (!e.target.classList.contains("on")) {
                if (ageConter.length < 2) {
                    e.target.classList.add("on");
                    ageConter.push(e.target.value);
                    console.log(ageConter);
                } else {
                    console.log(ageConter);
                    alert("나이대는 최대 2개까지 선택가능합니다.");
                }
            } else {
                e.target.classList.remove("on");
                ageConter.splice(ageConter.indexOf(e.target.value), 1);
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

    const necklaceSt = document.querySelector("#necklaceSt");
    const earringSt = document.querySelector("#earringSt");
    const braceletSt = document.querySelector("#braceletSt");
    const ankletSt = document.querySelector("#ankletSt");
    const ringSt = document.querySelector("#ringSt");
    const etcSt = document.querySelector("#etcSt");

    const styleBox = document.querySelectorAll(".styleBox");
    const styleBoxButton = document.querySelectorAll(".styleBox button");
    // const styleOnBoxButton = document.querySelectorAll(".styleBox.on button");

    let partConter = [];

    let styleConter = [];


    const neckOn = () => {
        for (let i = 0; i < styleBoxButton.length; i++) {
            if (necklaceBtn.classList.contains("on")) {
                necklaceSt.classList.add("on");
                earringSt.classList.remove("on");
                braceletSt.classList.remove("on");
                ankletSt.classList.remove("on");
                ringSt.classList.remove("on");
                etcSt.classList.remove("on");
                styleBoxButton[i].classList.remove("on");
                styleConter = [];
            } else {
                necklaceSt.classList.remove("on");
                styleBoxButton[i].classList.remove("on");
                styleConter = [];
            }
        }; ////////for
    };
    const earringOn = () => {
        for (let i = 0; i < styleBoxButton.length; i++) {
            if (earringBtn.classList.contains("on")) {
                earringSt.classList.add("on");
                necklaceSt.classList.remove("on");
                braceletSt.classList.remove("on");
                ankletSt.classList.remove("on");
                ringSt.classList.remove("on");
                etcSt.classList.remove("on");
                styleBoxButton[i].classList.remove("on");
                styleConter = [];
            } else {
                earringSt.classList.remove("on");
                styleBoxButton[i].classList.remove("on");
                styleConter = [];
            }
        }; ////////for
    };
    const bracelOn = () => {
        for (let i = 0; i < styleBoxButton.length; i++) {
            if (braceletBtn.classList.contains("on")) {
                braceletSt.classList.add("on");
                earringSt.classList.remove("on");
                necklaceSt.classList.remove("on");
                ankletSt.classList.remove("on");
                ringSt.classList.remove("on");
                etcSt.classList.remove("on");
                styleBoxButton[i].classList.remove("on");
                styleConter = [];
            } else {
                braceletSt.classList.remove("on");
                styleBoxButton[i].classList.remove("on");
                styleConter = [];
            }
        }; ////////for
    };
    const ankletOn = () => {
        for (let i = 0; i < styleBoxButton.length; i++) {
            if (ankletBtn.classList.contains("on")) {
                ankletSt.classList.add("on");
                earringSt.classList.remove("on");
                braceletSt.classList.remove("on");
                necklaceSt.classList.remove("on");
                ringSt.classList.remove("on");
                etcSt.classList.remove("on");
                styleBoxButton[i].classList.remove("on");
                styleConter = [];
            } else {
                ankletSt.classList.remove("on");
                styleBoxButton[i].classList.remove("on");
                styleConter = [];
            }
        }; //////for
    };
    const ringOn = () => {
        for (let i = 0; i < styleBoxButton.length; i++) {
            if (ringBtn.classList.contains("on")) {
                ringSt.classList.add("on");
                earringSt.classList.remove("on");
                braceletSt.classList.remove("on");
                ankletSt.classList.remove("on");
                necklaceSt.classList.remove("on");
                etcSt.classList.remove("on");
                styleBoxButton[i].classList.remove("on");
                styleConter = [];
            } else {
                ringSt.classList.remove("on");
                styleBoxButton[i].classList.remove("on");
                styleConter = [];
            }
        }; /////////for
    };
    const etcOn = () => {
        for (let i = 0; i < styleBoxButton.length; i++) {
            if (etcBtn.classList.contains("on")) {
                etcSt.classList.add("on");
                earringSt.classList.remove("on");
                braceletSt.classList.remove("on");
                ankletSt.classList.remove("on");
                ringSt.classList.remove("on");
                necklaceSt.classList.remove("on");
                styleBoxButton[i].classList.remove("on");
                styleConter = [];
            } else {
                etcSt.classList.remove("on");
                styleBoxButton[i].classList.remove("on");
                styleConter = [];
            }
        }; //////// for
    };



    const necklaceBtnClick = (e) => {
        if (!e.target.classList.contains("on")) {
            e.target.classList.add("on");
            earringBtn.classList.remove("on");
            braceletBtn.classList.remove("on");
            ankletBtn.classList.remove("on");
            ringBtn.classList.remove("on");
            etcBtn.classList.remove("on");
            partConter = [];
            partConter.push(e.target.value);
            console.log(partConter);
        }
        neckOn();
    };
    const earringBtnClick = (e) => {
        if (!e.target.classList.contains("on")) {
            e.target.classList.add("on");
            necklaceBtn.classList.remove("on");
            braceletBtn.classList.remove("on");
            ankletBtn.classList.remove("on");
            ringBtn.classList.remove("on");
            etcBtn.classList.remove("on");
            partConter = [];
            partConter.push(e.target.value);
            console.log(partConter);
        }
        earringOn();
    };
    const braceletBtnClick = (e) => {
        if (!e.target.classList.contains("on")) {
            e.target.classList.add("on");
            earringBtn.classList.remove("on");
            necklaceBtn.classList.remove("on");
            ankletBtn.classList.remove("on");
            ringBtn.classList.remove("on");
            etcBtn.classList.remove("on");
            partConter = [];
            partConter.push(e.target.value);
            console.log(partConter);
        }
        bracelOn();
    };
    const ankletBtnClick = (e) => {
        if (!e.target.classList.contains("on")) {
            e.target.classList.add("on");
            earringBtn.classList.remove("on");
            braceletBtn.classList.remove("on");
            necklaceBtn.classList.remove("on");
            ringBtn.classList.remove("on");
            etcBtn.classList.remove("on");
            partConter = [];
            partConter.push(e.target.value);
            console.log(partConter);
        }
        ankletOn();
    };
    const ringBtnClick = (e) => {
        if (!e.target.classList.contains("on")) {
            e.target.classList.add("on");
            earringBtn.classList.remove("on");
            braceletBtn.classList.remove("on");
            ankletBtn.classList.remove("on");
            necklaceBtn.classList.remove("on");
            etcBtn.classList.remove("on");
            partConter = [];
            partConter.push(e.target.value);
            console.log(partConter);
        }
        ringOn();
    };
    const etcBtnClick = (e) => {
        if (!e.target.classList.contains("on")) {
            e.target.classList.add("on");
            earringBtn.classList.remove("on");
            braceletBtn.classList.remove("on");
            ankletBtn.classList.remove("on");
            ringBtn.classList.remove("on");
            necklaceBtn.classList.remove("on");
            partConter = [];
            partConter.push(e.target.value);
            console.log(partConter);
        }
        etcOn();
    };


    necklaceBtn.addEventListener("click", necklaceBtnClick);
    earringBtn.addEventListener("click", earringBtnClick);
    braceletBtn.addEventListener("click", braceletBtnClick);
    ankletBtn.addEventListener("click", ankletBtnClick);
    ringBtn.addEventListener("click", ringBtnClick);
    etcBtn.addEventListener("click", etcBtnClick);


    // console.log(styleBox);
    // console.log(styleBoxButton);

    //stylebox의 class에 on이 사라질시 

    for (let i = 0; i < styleBoxButton.length; i++) {
        const styleBtnOnOff = (e) => {

            if (!e.target.classList.contains("on")) {
                if (styleConter.length < 5) {
                    // console.log("안녕하세요");
                    e.target.classList.add("on");
                    styleConter.push(e.target.value);
                    console.log(styleConter);
                } else {
                    console.log(styleConter);
                    alert("스타일은 최대 5개까지 선택가능합니다.");
                }
            } else {
                e.target.classList.remove("on");
                styleConter.splice(styleConter.indexOf(e.target.value), 1);
                console.log(styleConter);
                // console.log("삭제한다");
                // styleBoxButton[i].classList.remove("on");
            }

        }; /////////styleBtnOnOff

        styleBoxButton[i].addEventListener("click", styleBtnOnOff)
    }; ///////// fot문///////////////////////

    const materialBtn = document.querySelectorAll(".materialBox button");
    const weightBox = document.querySelector(".weightBox");

    console.log(materialBtn);

    let materialConter = [];

    const weightBoxOn = () => {
        weightBox.classList.add("on");
    };
    const weightBoxOff = () => {
        weightBox.classList.remove("on");
    };


    for (let i = 0; i < materialBtn.length; i++) {

        const materialOnOff = (e) => {
            if (!e.target.classList.contains("on")) {
                e.target.classList.add("on");
                materialConter.push(e.target.value);
                console.log(materialConter);
                    if(materialBtn[5].classList.contains("on") || materialBtn[6].classList.contains("on")){
                        weightBoxOn();
                    }
            } else {
                e.target.classList.remove("on");
                materialConter.splice(materialConter.indexOf(e.target.value), 1);
                console.log(materialConter);
                    if(!materialBtn[5].classList.contains("on") || !materialBtn[6].classList.contains("on")){
                        weightBoxOff();
                    }
            }
        };
        materialBtn[i].addEventListener("click", materialOnOff);
    }; /////// for 문

    const weightBtn = document.querySelectorAll(".weightBox button");

    console.log(weightBtn);

    let weightConter = [];

    for(let i=0; i<weightBtn.length; i++){
        const weightBtnClick = (e) =>{
            if(!e.target.classList.contains("on")){
                e.target.classList.add("on");
                weightConter.push(e.target.value);
                console.log(weightConter);
            }else{
                e.target.classList.remove("on");
                weightConter.splice(weightConter.indexOf(e.target.value), 1);
                console.log(weightConter);
            }
        };

        weightBtn[i].addEventListener("click", weightBtnClick);
    };//////for문


const PostForm = document.querySelector("#PostForm");

const Makeinputs = () => {
    ageinput = "<input name='ageinput' type='text' value='"+ageConter+"' >";
    PostForm.insertAdjacentHTML('beforeEnd',ageinput);
    partinput = "<input name='partinput' type='text' value='"+partConter+"' >";
    PostForm.insertAdjacentHTML('beforeEnd',partinput);
    styleinput = "<input name='styleinput' type='text' value='"+styleConter+"' >";
    PostForm.insertAdjacentHTML('beforeEnd',styleinput);
    materialinput = "<input name='materialinput' type='text' value='"+materialConter+"' >";
    PostForm.insertAdjacentHTML('beforeEnd',materialinput);
    weightinput = "<input name='weightinput' type='text' value='"+weightConter+"' >";
    PostForm.insertAdjacentHTML('beforeEnd',weightinput);
    alert("성공");
};

// const lelel = document.querySelector("#lelel");

PostForm.addEventListener("submit", Makeinputs);



















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