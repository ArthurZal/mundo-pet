export function createItem(schedule) {
    const li = document.createElement("li");
        const div = document.createElement("div");
        const hour = document.createElement("strong");
        const petName = document.createElement("strong");
        const tutorName = document.createElement("p");
        const procediment = document.createElement("p");
        const removeButton = document.createElement("button");

        hour.innerText = schedule.time;
        petName.innerText = schedule.petName;
        tutorName.innerText = schedule.tutorName;
        procediment.innerText = schedule.serviceDescription;
        removeButton.innerText = "Remover agendamento";

        div.appendChild(hour);
        div.appendChild(petName);
        div.appendChild(tutorName);
        div.classList.add("details");

        li.appendChild(div);
        li.appendChild(procediment);
        li.appendChild(removeButton);

        return li;
}