const addButton = document.getElementById('criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');
const eraseButton = document.getElementById('apaga-tudo');

function addListItem() {
  addButton.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerHTML = taskInput.value;
    orderedList.appendChild(newTask);
    taskInput.value = '';
  });
}

addListItem();

function resetGreyItem() {
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
      resetGreyItem();
      item.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}

greyBackground();

function setAsCompleted() {
  orderedList.addEventListener('dblclick', (event) => {
    const item = event.target;
    if (item.id !== 'lista-tarefas') {
      if (item.classList.contains('completed')) {
        item.classList.remove('completed');
      } else {
        item.classList.add('completed');
      }
    }
  });
}

setAsCompleted();

function eraseList() {
  eraseButton.addEventListener('click', () => {
    while (orderedList.firstChild) {
      orderedList.removeChild(orderedList.firstChild);
    }
  });
}

eraseList();
