document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      createTask(taskText);
      taskInput.value = "";
    }
  });

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTaskButton.click();
    }
  });

  function createTask(taskText) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;
    taskList.appendChild(listItem);

    const deleteButton = listItem.querySelector(".delete");
    deleteButton.addEventListener("click", function () {
      listItem.remove();
    });
  }
});
