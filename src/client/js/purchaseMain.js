const purchNum = document.querySelectorAll(".purchNum");

console.log(purchNum);

for(let i=0; i<purchNum.length; i++){
    purchNum[i].innerText = i+1;
}

