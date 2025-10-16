import dayjs from "dayjs";

export function dateToday(inputDate) {
    const today = dayjs().format("YYYY-MM-DD");
    inputDate.setAttribute("min", today);
    inputDate.value = today;

    return today;
}