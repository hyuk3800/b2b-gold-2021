//////////////// 카탈로그 페이지 ////////////////////



const fliterBtn = document.querySelector(".filterbtn button");
const mainck = document.querySelector(".mainck");

function skdhkfk(){
    mainck.classList.toggle("on");
}



fliterBtn.addEventListener("click", skdhkfk);

const cardBro = document.querySelector(".card_bro");

const tableBro = document.querySelector(".table_bro"); 

const on = "on";

const mainContainerCard = document.querySelector(".mainContainerCard");

const mainContTable = document.querySelector(".mainContTable");


function cardBroBtnClick(){
    
    
    if(cardBro.classList.contains(on)){
       

    }else{
        cardBro.classList.toggle(on);
        tableBro.classList.toggle(on);
        mainContainerCard.classList.toggle(on);
        mainContTable.classList.toggle(on);

    }

}///////////////////////cardBroBtnClick//////////

function tableBroBtnClick(){

    if(tableBro.classList.contains(on)){

    }else{
        cardBro.classList.toggle(on);
        tableBro.classList.toggle(on);
        mainContainerCard.classList.toggle(on);
        mainContTable.classList.toggle(on);
    }


}



cardBro.addEventListener("click", cardBroBtnClick);
tableBro.addEventListener("click", tableBroBtnClick);


const clickAndChack = document.querySelector(".clickAndChack");

const clickThis = document.getElementsByClassName("clickThis");

const clickThisAll = document.querySelectorAll(".clickThis:checked");


//console.log(clickThis);


if(clickThis.length === clickThisAll.length){
    clickAndChack.classList.remove(on);
    
}else{
    clickAndChack.classList.add(on); 
}





function clickAndChackClick(){
    
 
    if(clickAndChack.classList.contains(on) === false){
        clickAndChack.classList.add(on); 
    }
    else {
        clickAndChack.classList.remove(on);
    }
   
    
    
    // clickAndChack 에 on이 들어갈 경우 전체 선택, 아닐경우 해제
    for(var x of clickThis){
        
        console.dir(x);
        
        
        if(clickAndChack.classList.contains(on) === true)
        x.checked = true;
        else
        x.checked = false;
        
    }////////////// for in ///////////
    
    
    // if(x.checked && false){
    //     clickAndChack.classList.remove(on);
    // }
    // console.log(x.checked);
}



   


// for(var i =0, n = clickThis.length; i< n; i++){
//     clickThis[i].checked = source.checked;
// }

// function toggel(source){
//     if(clickAndChack.classList.contains(on) === true){
//     for(var i =0, n = clickThis.length; i< n; i++){
//         clickThis[i].checked = source.checked;
//     }
// }

// }
// toggel();




clickAndChack.addEventListener("click",clickAndChackClick);



