import { dateToday } from "../utility/dateToday";
import { showSchedules } from "./schedule/show-schedules";

document.addEventListener("DOMContentLoaded", () => {
  const dateInput = document.getElementById("date-menu");
  dateToday(dateInput);
  showSchedules();

  dateInput.addEventListener("change", (e) => {
    showSchedules();
  });

});
