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
