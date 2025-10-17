import { createNewSchedule } from "../../schedule/create-schedule";

const form = document.querySelector("form");
const inputTutorName = document.querySelector("#tutor-name");
const inputPetName = document.querySelector("#pet-name");
const inputTel = document.querySelector("#tel");
const inputDescription = document.querySelector("#service-description");
const inputDate = document.querySelector("#date");
const inputHours = document.querySelector("#hours-option");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = Math.random().toString(16).slice(2, 6);

    await createNewSchedule(
        id,
        inputTutorName.value,
        inputPetName.value,
        inputTel.value,
        inputDescription.value,
        inputDate.value,
        inputHours.value
    );

    window.location.reload();
});