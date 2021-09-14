const postForm = document.querySelector(".postForm");
const stoneButton = document.querySelector("#stoneButton");
const offButton = document.querySelector("#offButton");
const bgbtn = document.querySelector("#bgbtn");

const postFormOn = () => {
    postForm.classList.add("on");
    postForm.style.transition = "";
};
const postFormOff = () => {
    postForm.classList.remove("on");
    postForm.style.transition = "height 0s .5s";
};


stoneButton.addEventListener("click", postFormOn);
bgbtn.addEventListener("click",postFormOff);
offButton.addEventListener("click", postFormOff);
