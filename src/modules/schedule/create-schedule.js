import { apiConfig } from "../../utility/api-config.js";

export async function createNewSchedule(id, tutorName, petName, tel, serviceDescription, date, time) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id,
                tutorName,
                petName,
                tel,
                serviceDescription,
                date,
                time,
            }),
        })

        alert("Agendamento criado com sucesso!");

    } catch (error) {
        alert("Erro ao criar agendamento. Tente novamente.");
    }
}