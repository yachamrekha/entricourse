var  addTaskButton = document.getElementById("addTask");
var taskInput = document.getElementById("task");
var taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", () => {
  var taskText = taskInput.value.trim();
  if (taskText !== "") {
    var taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
});

taskInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTaskButton.click();
  }
})