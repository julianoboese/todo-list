const addButton = document.getElementById('criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');

function addListItem() {
  addButton.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerHTML = taskInput.value;
    orderedList.appendChild(newTask);
    taskInput.value = '';
  });
}

addListItem()