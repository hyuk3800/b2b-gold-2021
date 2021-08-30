const ham = document.getElementById("ham");
const hamMenu = document.querySelector(".hammn")
// console.log(ham);

const hamListClick = () => {
    hamMenu.classList.toggle("on");
};

ham.addEventListener("click", hamListClick);