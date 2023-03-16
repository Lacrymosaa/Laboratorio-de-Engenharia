var taskList = document.getElementById("taskList");

function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskValue = taskInput.value;
  var taskItem = document.createElement("li");
  taskItem.innerHTML = taskValue + " <button onclick='moveUp(this.parentNode)'>^</button> <button onclick='moveDown(this.parentNode)'>v</button> <button onclick='deleteTask(this.parentNode)'>Excluir</button>";
  taskList.appendChild(taskItem);
  taskInput.value = "";
}

function deleteTask(taskItem) {
  taskList.removeChild(taskItem);
}

function moveUp(taskItem) {
  var previousTaskItem = taskItem.previousSibling;
  if (previousTaskItem) {
    taskList.insertBefore(taskItem, previousTaskItem);
  }
}

function moveDown(taskItem) {
  var nextTaskItem = taskItem.nextSibling;
  if (nextTaskItem) {
    taskList.insertBefore(nextTaskItem, taskItem);
  }
}

