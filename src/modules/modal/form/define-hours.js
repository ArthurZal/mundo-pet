import { hours } from "../../../utility/hours.js";

const hourSelect = document.getElementById("hours-option");

export function defineHours() {
    hours.forEach(hour => {
        const option = document.createElement("option");
        option.value = hour;
        option.textContent = hour;
        hourSelect.appendChild(option);
    })
}