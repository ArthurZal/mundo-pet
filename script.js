const newScheduleButton = document.querySelector(".new-schedule");
const modalContainer = document.querySelector(".modal-container");
const mainApp = document.querySelector(".app-container");
const closeIcon = document.querySelector(".close-icon");

newScheduleButton.addEventListener( "click", () => {
    modalContainer.classList.remove("disable");

})

closeIcon.addEventListener( "click", () => {
    modalContainer.classList.add("disable");
})

