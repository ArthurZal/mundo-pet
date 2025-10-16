import dayjs from "dayjs";
import { hours } from "../../../utility/hours.js";
import { getSchedulesByDate } from "../../schedule/get-schedules.js";

const hourSelect = document.getElementById("hours-option");
const inputDate = document.getElementById("date");

export async function defineHours() {
  hourSelect.innerHTML = "";

  const selectedDate = inputDate.value;
  
  const eschedulesTotal = await getSchedulesByDate(selectedDate);
  const unvailableHours = eschedulesTotal.map((schedule) => schedule.time);
  
  const availableHours = hours.filter(
    (hour) => !unvailableHours.includes(hour)
  );

  const currentTime = dayjs().hour();

  availableHours.forEach((hour) => {
    const [hourInt] = hour.split(":");

    if (Number(hourInt) > Number(currentTime)) {
      createOptionElement(hour);
    } else if (selectedDate !== dayjs().format("YYYY-MM-DD")) {
      createOptionElement(hour);
    }
  });
}

function createOptionElement(hour) {
  const option = document.createElement("option");
  option.value = hour;
  option.textContent = hour;
  hourSelect.appendChild(option);
}
