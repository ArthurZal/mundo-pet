import { createItem } from "../../utility/createItem";
import { getSchedulesByDate } from "./get-schedules";

const morningSchedules = document.querySelector(".morning");
const afternoonSchedules = document.querySelector(".afternoon");
const eveningSchedules = document.querySelector(".evening");
const inputDate = document.getElementById("date-menu");

export async function showSchedules() {
  try {
    morningSchedules.innerHTML = "";
    afternoonSchedules.innerHTML = "";
    eveningSchedules.innerHTML = "";

    const dateToday = inputDate.value;

    const schedules = await getSchedulesByDate(dateToday);

    schedules.forEach((schedule) => {
      const li = createItem(schedule);

      const hour = schedule.time.slice(0, 2);

      if (hour >= 9 && hour < 12) {
        morningSchedules.appendChild(li);
      } else if (hour >= 12 && hour <= 18) {
        afternoonSchedules.appendChild(li);
      } else {
        eveningSchedules.appendChild(li);
      }
    });
    
  } catch (error) {
    alert("Não foi possível carregar os agendamentos.");
    console.log(error);
  }
}
