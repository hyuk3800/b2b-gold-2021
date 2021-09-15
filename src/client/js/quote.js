const openButton = document.querySelector("#openButton");
const postForm = document.querySelector("#postForm");
const bgOff = document.querySelector("#bgOff");
const offButton = document.querySelector("#offButton");

const postBoxOn = () => {
    postForm.classList.add("on");
    postForm.style.transition = "";
};
const postBoxOff = () => {
    postForm.classList.remove("on");
    postForm.style.transition = "height 0s .5s";
};







openButton.addEventListener("click", postBoxOn);
bgOff.addEventListener("click", postBoxOff);
offButton.addEventListener("click", postBoxOff);