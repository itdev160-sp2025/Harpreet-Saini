var tasks = []

var taskStatus = {
  active: 'active',
  completed: 'completed'
}

function Task(id, name, status) {
  this.id = id
  this.name = name
  this.status = status
}

function addTaskElement(task) {
  var li = document.createElement('li')
  li.textContent = task.name
  li.id = task.id
  if (task.status === taskStatus.active) {
    li.addEventListener('click', completeTask)
    document.getElementById('active-list').appendChild(li)
  } else {
    document.getElementById('completed-list').appendChild(li)
  }
}

function addTask(event) {
  var input = document.getElementById('input-task')
  var name = input.value.trim()
  if (name === '') return
  var id = 'task-' + tasks.length
  var task = new Task(id, name, taskStatus.active)
  tasks.push(task)
  addTaskElement(task)
  input.value = ''
}

function completeTask(event) {
  var taskElement = event.target
  var taskId = taskElement.id
  var task = tasks.find(t => t.id === taskId)
  if (task && task.status === taskStatus.active) {
    task.status = taskStatus.completed
    document.getElementById('active-list').removeChild(taskElement)
    addTaskElement(task)
  }
}

function init() {
  document.getElementById('add-task').addEventListener('click', addTask)
}

init()
