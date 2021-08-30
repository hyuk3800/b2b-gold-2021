const cardBro = document.querySelector(".card_bro");
const tableBro = document.querySelector(".table_bro");
const on = "on";
const mainContainerCard = document.querySelector(".mainContainerCard");
const mainContTable = document.querySelector(".mainContTable");

console.log(
    cardBro,
    tableBro,
    on,
    mainContainerCard,
    mainContTable,
);

const cardBroBtnClick = () => {
    if(!cardBro.classList.contains(on)) {
        cardBro.classList.toggle(on);
        tableBro.classList.toggle(on);
        mainContainerCard.classList.toggle(on);
        mainContTable.classList.toggle(on);
    }
};

const tableBroBtnClick = () => {
    if(!tableBro.classList.contains(on)) {
        cardBro.classList.toggle(on);
        tableBro.classList.toggle(on);
        mainContainerCard.classList.toggle(on);
        mainContTable.classList.toggle(on);
    }
};

cardBro.addEventListener("click", cardBroBtnClick);
tableBro.addEventListener("click", tableBroBtnClick);


