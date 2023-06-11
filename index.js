document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const taskDescription = taskInput.value;

    console.log("New task description:", taskDescription);
    taskInput.value = "";
  });
});
