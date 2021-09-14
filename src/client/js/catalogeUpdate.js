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
                if (materialBtn[5].classList.contains("on") || materialBtn[6].classList.contains("on")) {
                    weightBoxOn();
                }
            } else {
                e.target.classList.remove("on");
                materialConter.splice(materialConter.indexOf(e.target.value), 1);
                console.log(materialConter);
                if (!materialBtn[5].classList.contains("on") || !materialBtn[6].classList.contains("on")) {
                    weightBoxOff();
                }
            }
        };
        materialBtn[i].addEventListener("click", materialOnOff);
    }; /////// for 문

    const weightBtn = document.querySelectorAll(".weightBox button");

    console.log(weightBtn);

    let weightConter = [];

    for (let i = 0; i < weightBtn.length; i++) {
        const weightBtnClick = (e) => {
            if (!e.target.classList.contains("on")) {
                e.target.classList.add("on");
                weightConter.push(e.target.value);
                console.log(weightConter);
            } else {
                e.target.classList.remove("on");
                weightConter.splice(weightConter.indexOf(e.target.value), 1);
                console.log(weightConter);
            }
        };

        weightBtn[i].addEventListener("click", weightBtnClick);
    }; //////for문


    const PostForm = document.querySelector("#PostForm");

    const Makeinputs = () => {
        ageinput = "<input name='ageinput' type='text' value='" + ageConter + "' >";
        PostForm.insertAdjacentHTML('beforeEnd', ageinput);
        partinput = "<input name='partinput' type='text' value='" + partConter + "' >";
        PostForm.insertAdjacentHTML('beforeEnd', partinput);
        styleinput = "<input name='styleinput' type='text' value='" + styleConter + "' >";
        PostForm.insertAdjacentHTML('beforeEnd', styleinput);
        materialinput = "<input name='materialinput' type='text' value='" + materialConter + "' >";
        PostForm.insertAdjacentHTML('beforeEnd', materialinput);
        weightinput = "<input name='weightinput' type='text' value='" + weightConter + "' >";
        PostForm.insertAdjacentHTML('beforeEnd', weightinput);
        alert("성공");
    };

    // const lelel = document.querySelector("#lelel");

    PostForm.addEventListener("submit", Makeinputs);


    // 추가버튼 클릭시 표 추가. 삭제 버튼 클릭ㅎ시 해당버튼 삭제


    const stoneClickBtn = document.querySelector("#stoneClickBtn");
    const stoneTbody = document.querySelector("#stoneTbody");
    const stoneTr = document.querySelectorAll("#stoneTbody tr");

    let table_count = [];
    let count = 0;
    let cnt = 0;


    const stoneTablePluse = () => {

        const row = document.createElement("tr");

        if (table_count.length === 0) {
            const td1 = document.createElement("td");
            td1TdIn = "<div><input type='text' placeholder='스톤명', name='stoneName'><img class='sltImg' src='../../../../static/images/ic-zoom-in-24-px@3x.png' alt='검색'></div>";
            td1.insertAdjacentHTML("beforeEnd", td1TdIn);

            const td2 = document.createElement("td");
            td2TdIn = "<div><input type='number' placeholder='수량' name='stoneQuantity'></div>";
            td2.insertAdjacentHTML("beforeEnd", td2TdIn);

            const td3 = document.createElement("td");
            td3TdIn = "<div><input type='text' placeholder='설명', name='stoneDescription'></div>";
            td3.insertAdjacentHTML("beforeEnd", td3TdIn);

            const td4 = document.createElement("td");
            td4TdIn = "<div><input type='number' placeholder='중량(개당)', name='stoneWeight2'></div>";
            td4.insertAdjacentHTML("beforeEnd", td4TdIn);

            const td5 = document.createElement("td");
            td5TdIn = "<div><input type='number' placeholder='중량(총중량)'></div>";
            td5.insertAdjacentHTML("beforeEnd", td5TdIn);

            const td6 = document.createElement("td");
            td6TdIn = "<div><input type='number' placeholder='매입단가(개당)', name='stonePurchasePrice'></div>";
            td6.insertAdjacentHTML("beforeEnd", td6TdIn);

            const td7 = document.createElement("td");
            td7TdIn = "<div><input type='number' placeholder='매입단가(총가격)'></div>";
            td7.insertAdjacentHTML("beforeEnd", td7TdIn);

            const td8 = document.createElement("td");
            td8TdIn = "<div><input type='number' placeholder='판매단가(개당)', name='stoneSellingPrice'></div>";
            td8.insertAdjacentHTML("beforeEnd", td8TdIn);

            const td9 = document.createElement("td");
            td9TdIn = "<div><input type='number' placeholder='판매단가(총가격)'></div>";
            td9.insertAdjacentHTML("beforeEnd", td9TdIn);

            const td10 = document.createElement("td");
            td10TdIn = "<button type='button' value='delButton" + (count + 1) + "'>삭제</button>";
            td10.insertAdjacentHTML("beforeEnd", td10TdIn);

            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            row.appendChild(td5);
            row.appendChild(td6);
            row.appendChild(td7);
            row.appendChild(td8);
            row.appendChild(td9);
            row.appendChild(td10);


            stoneTbody.appendChild(row);

            count++;
            cnt++;
            table_count[cnt] = count;

        } else {
            const td1 = document.createElement("td");
            td1TdIn = "<div><input type='text' placeholder='스톤명', name='stoneName2'><img class='sltImg' src='../../../../static/images/ic-zoom-in-24-px@3x.png' alt='검색'></div>";
            td1.insertAdjacentHTML("beforeEnd", td1TdIn);

            const td2 = document.createElement("td");
            td2TdIn = "<div><input type='number' placeholder='수량' name='stoneQuantity2'></div>";
            td2.insertAdjacentHTML("beforeEnd", td2TdIn);

            const td3 = document.createElement("td");
            td3TdIn = "<div><input type='text' placeholder='설명', name='stoneDescription2'></div>";
            td3.insertAdjacentHTML("beforeEnd", td3TdIn);

            const td4 = document.createElement("td");
            td4TdIn = "<div><input type='number' placeholder='중량(개당)', name='stoneWeight22'></div>";
            td4.insertAdjacentHTML("beforeEnd", td4TdIn);

            const td5 = document.createElement("td");
            td5TdIn = "<div><input type='number' placeholder='중량(총중량)'></div>";
            td5.insertAdjacentHTML("beforeEnd", td5TdIn);

            const td6 = document.createElement("td");
            td6TdIn = "<div><input type='number' placeholder='매입단가(개당)', name='stonePurchasePrice2'></div>";
            td6.insertAdjacentHTML("beforeEnd", td6TdIn);

            const td7 = document.createElement("td");
            td7TdIn = "<div><input type='number' placeholder='매입단가(총가격)'></div>";
            td7.insertAdjacentHTML("beforeEnd", td7TdIn);

            const td8 = document.createElement("td");
            td8TdIn = "<div><input type='number' placeholder='판매단가(개당)', name='stoneSellingPrice2'></div>";
            td8.insertAdjacentHTML("beforeEnd", td8TdIn);

            const td9 = document.createElement("td");
            td9TdIn = "<div><input type='number' placeholder='판매단가(총가격)'></div>";
            td9.insertAdjacentHTML("beforeEnd", td9TdIn);

            const td10 = document.createElement("td");
            td10TdIn = "<button type='button' value='delButton" + (count + 1) + "'>삭제</button>";
            td10.insertAdjacentHTML("beforeEnd", td10TdIn);

            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            row.appendChild(td5);
            row.appendChild(td6);
            row.appendChild(td7);
            row.appendChild(td8);
            row.appendChild(td9);
            row.appendChild(td10);


            stoneTbody.appendChild(row);

            count++;
            cnt++;
            table_count[cnt] = count;

        }
        console.log(table_count);
        console.log("이건", stoneDelButton);

    };








// 기타 공임정보

const etcPluseBtn = document.querySelector("#etcPluseBtn");
const etcTbody = document.querySelector("#etcTbody");


const etcAdd1 = () => {
    const row = document.createElement("tr");

    const td1 = document.createElement("td");
    td1TdIn = "<div><input type='text' name='etcName' placeholder='이름'></div>"
    td1.insertAdjacentHTML("beforeEnd", td1TdIn);

    const td2 = document.createElement("td");
    td2TdIn = "<div><input type='text' name='etcPrice' placeholder='가격(개당)'></div>"
    td2.insertAdjacentHTML("beforeEnd", td2TdIn);

    const td3 = document.createElement("td");
    td3TdIn = "<div><input type='number', placeholder='가격(총가격)'></div>"
    td3.insertAdjacentHTML("beforeEnd", td3TdIn);

    const td4 = document.createElement("td");
    td4TdIn = "<div><input type='number', name='etcQuantuty' placeholder='수량'></div>"
    td4.insertAdjacentHTML("beforeEnd", td4TdIn);

    const td5 = document.createElement("td");
    td5TdIn = "<div><input type='text', name='etcDescription' placeholder='설명'></div>"
    td5.insertAdjacentHTML("beforeEnd", td5TdIn);

    const td6 = document.createElement("td");
    td6TdIn = "<button>삭제</button>"
    td6.insertAdjacentHTML("beforeEnd", td6TdIn);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    row.appendChild(td6);


    etcTbody.appendChild(row);

};





    etcPluseBtn.addEventListener("click", etcAdd1);










    stoneClickBtn.addEventListener("click", stoneTablePluse);

    const stoneDelButton = document.querySelectorAll("#delButton" + "table_count");


    console.log("이거", stoneDelButton);

    for (let i = 0; i < table_count.length; i++) {
        stoneDelButton.va
        // console.log(stoneDelButton);

        const stoneDelButtonClick = (e) => {
            console.log("되냐?");
        };



        stoneDelButton[i].addEventListener("click", stoneDelButtonClick);
    }; ////for 문

    
    
    // const stoneBtn = document.querySelector("#stoneClickBtn");
    // const stoneTbody = document.querySelector("#stoneTbody");
    // const stoneDelete = document.querySelector("#stoneDelete");
    
    
    // etcName = [ 's','gf' ];
    // console.log("etc네임음",etcName.length);
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