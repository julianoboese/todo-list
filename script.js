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

addListItem();

function findGreyItem() {
  const listItems = orderedList.children;
  for (let i = 0; i < listItems.length; i += 1) {
    if (listItems[i].style.backgroundColor === 'rgb(128, 128, 128)') {
      listItems[i].style.backgroundColor = 'white';
    }
  }
}

function greyBackground() {
  orderedList.addEventListener('click', (event) => {
    const item = event.target;
    if (item.id !== 'lista-tarefas') {
      findGreyItem();
      item.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}

greyBackground();
