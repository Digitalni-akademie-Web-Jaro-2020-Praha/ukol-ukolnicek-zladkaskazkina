'use strict';

console.log('funguju!');

let tasks = [];


function updateTasks() {
  //zobrazí na stránce seznam úkolů dle toho, co je obsaženo v poli tasks.
  const tasksHtml = document.querySelector(".todo__tasks");
  tasksHtml.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    tasksHtml.innerHTML +=
      `<div class="task">
        ${tasks[i]}  </div>`;
  }
}

function addTask() {
  const inputTask = document.querySelector(".new-task");
  tasks.push(inputTask.value);
  updateTasks();
  inputTask.value = "";
}

const addBtn = document.querySelector(".btn-add");
addBtn.addEventListener("click", addTask);
document.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    addTask();
  }
});