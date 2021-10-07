const ham = document.getElementById("ham");
const hamMenu = document.querySelector(".hammn")
const hamListAll = document.querySelectorAll(".hammn li")
const hamBG = document.querySelector("#hamBG");
// console.log(ham);

const hamListClick = () => {
    hamMenu.classList.toggle("on");
    hamBG.classList.toggle("on");
};

ham.addEventListener("click", hamListClick);

for(let i=0; i<hamListAll.length; i++){
    hamListAll[i].addEventListener("click",hamListClick);
};

hamBG.addEventListener("click",hamListClick);
