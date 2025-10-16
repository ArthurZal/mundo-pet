import { createNewSchedule } from "../../schedule/create-schedule";
import dayjs from "dayjs";
import { dateToday } from "../../../utility/dateToday.js";

const form = document.querySelector("form");
const inputTutorName = document.querySelector("#tutor-name");
const inputPetName = document.querySelector("#pet-name");
const inputTel = document.querySelector("#tel");
const inputDescription = document.querySelector("#service-description");
const inputDate = document.querySelector("#date");
const inputHours = document.querySelector("#hours-option");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    await createNewSchedule(
        inputTutorName.value,
        inputPetName.value,
        inputTel.value,
        inputDescription.value,
        inputDate.value,
        inputHours.value
    );

    window.location.reload();
});