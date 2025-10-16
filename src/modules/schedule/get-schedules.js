import { apiConfig } from "../../utility/api-config.js";

export async function getSchedules() {
  try {
    const response = await fetch(`${apiConfig.baseUrl}/schedules`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
    
  } catch (error) {
    console.log("Não foi possível buscar os agendamentos.", error);
  }
}

export async function getSchedulesByDate(date) {
  const schedules = await getSchedules();
  return schedules.filter((schedule) => schedule.date === date);
}