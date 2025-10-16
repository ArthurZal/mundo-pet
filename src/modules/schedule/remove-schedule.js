import { apiConfig } from "../../utility/api-config";

export async function removeSchedule(id) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules/${id}`,  {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
    } catch (error) {
        alert("Não foi possível remover o agendamento.");
        console.log(error);
    }

}

removeSchedule("596b");