import { showSchedules } from "./schedule/show-schedules";
import dayjs from "dayjs";

document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("date-menu");
  const dateToday = dayjs().format("YYYY-MM-DD");
  dateInput.value = dateToday;

  showSchedules(dateToday);

  dateInput.addEventListener("change", (e) => {
    const selectedDate = dateInput.value;
    showSchedules(selectedDate);
  });
});
