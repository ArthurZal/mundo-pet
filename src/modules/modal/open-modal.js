import { setDate } from "./form/define-date.js";

const openModalButton = document.querySelector(".open-modal-button");
const closeModalButton = document.querySelector(".close-icon");
const modalContainer = document.querySelector(".modal-container");
const form = document.querySelector("form");

openModalButton.addEventListener("click", () => {
    modalContainer.classList.remove("disable")
    form.reset();
    setDate();
});

closeModalButton.addEventListener("click", () => {
    modalContainer.classList.add("disable")
});