import { defineHours} from "./form/define-hours.js";

const openModalButton = document.querySelector(".open-modal-button");
const closeModalButton = document.querySelector(".close-icon");
const modalContainer = document.querySelector(".modal-container");

openModalButton.addEventListener("click", () => {
    modalContainer.classList.remove("disable")
    defineHours();
    
});

closeModalButton.addEventListener("click", () => {
    modalContainer.classList.add("disable")
});