const taskList = [];
const taskListEl = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const clearBtn = document.getElementById("clear-completed");

function renderTasks() {
  taskListEl.innerHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];
    const taskEl = document.createElement("div");
    taskEl.className = "task" + (task.completed ? " completed" : "");
    taskEl.innerHTML = `
      <span>${task.text}</span>
      <button data-index="${i}">${task.completed ? "Undo" : "Complete"}</button>
    `;
    taskListEl.appendChild(taskEl);
  }
}

function addTask(text) {
  taskList.push({ text, completed: false });
  renderTasks();
}

function toggleComplete(index) {
  taskList[index].completed = !taskList[index].completed;
  renderTasks();
}

function clearCompleted() {
  for (let i = taskList.length - 1; i >= 0; i--) {
    if (taskList[i].completed) {
      taskList.splice(i, 1);
    }
  }
  renderTasks();
}

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask(taskInput.value.trim());
  taskInput.value = "";
});

taskListEl.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    const index = e.target.getAttribute("data-index");
    toggleComplete(index);
  }
});

clearBtn.addEventListener("click", clearCompleted);
