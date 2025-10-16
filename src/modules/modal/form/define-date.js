import { defineHours } from "./define-hours";
import { dateToday } from "../../../utility/dateToday.js";

const inputDate = document.getElementById("date");

export function setDate() {
    dateToday(inputDate);
    defineHours();

    inputDate.addEventListener("change", () => {
        defineHours();
    });
}