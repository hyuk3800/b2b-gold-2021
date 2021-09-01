window.onload = function () {
    
    const stoneBtn = document.querySelector("#stoneClickBtn");
    const stoneTbody = document.querySelector("#stoneTbody");
    const stoneDelete = document.querySelector("#stoneDelete");
    
    
    const stoneTableUp = () => {
        console.log("시작한다");
        const newRow = stoneTbody.insertRow(); 

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


        newCell1.innerHTML = "<div><input type='text' placeholder='스톤명'><img class='sltImg' src='../../../../static/images/ic-zoom-in-24-px@3x.png' alt='검색'></div>";
        newCell2.innerHTML = '<div><input type="text" placeholder="수량"></div>';
        newCell3.innerHTML = '<div><input type="text" placeholder="설명"></div>';
        newCell4.innerHTML = '<div><input type="text" placeholder="중량(개당)"></div>';
        newCell5.innerHTML = '<div><input type="text" placeholder="중량(총중량)"></div>';
        newCell6.innerHTML = '<div><input type="text" placeholder="매입단가(개당)"></div>';
        newCell7.innerHTML = '<div><input type="text" placeholder="매입단가(총가격)"></div>';
        newCell8.innerHTML = '<div><input type="text" placeholder="판매단가(개당)"></div>';
        newCell9.innerHTML = '<div><input type="text" placeholder="판매단가(총가격)"></div>';
        newCell10.innerHTML = '<button type="button", onclick="dd(e)" id="stoneDelete">삭제</button>';
    };

    // const stoneTableDel = (-1) => {
    //     console.log("지운다!");
    //     stoneTbody.deleteRow(-1);
    // };

    
     stoneBtn.addEventListener("click", stoneTableUp);

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