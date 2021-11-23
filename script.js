const addButton = document.getElementById('criar-tarefa');
const taskInput = document.getElementById('texto-tarefa');
const orderedList = document.getElementById('lista-tarefas');
const eraseButton = document.getElementById('apaga-tudo');
const completedButton = document.getElementById('remover-finalizados');
const saveButton = document.getElementById('salvar-tarefas');
const upButton = document.getElementById('mover-cima');
const downButton = document.getElementById('mover-baixo');
const removeButton = document.getElementById('remover-selecionado');

window.onload = () => {
  orderedList.innerHTML = localStorage.getItem('Tasks');
};

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
    if (listItems[i].classList.contains('selected')) {
      listItems[i].classList.remove('selected');
    }
  }
}

function greyBackground() {
  orderedList.addEventListener('click', (event) => {
    const item = event.target;
    if (item.id !== 'lista-tarefas') {
      resetGreyItem();
      item.classList.add('selected');
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

function eraseCompleted() {
  completedButton.addEventListener('click', () => {
    for (let i = orderedList.children.length - 1; i >= 0; i -= 1) {
      if (orderedList.children[i].classList.contains('completed')) {
        orderedList.children[i].remove();
      }
    }
  });
}

eraseCompleted();

function storeListItems() {
  saveButton.addEventListener('click', () => {
    localStorage.setItem('Tasks', orderedList.innerHTML);
  });
}

storeListItems();

function moveUp() {
  upButton.addEventListener('click', () => {
    if (document.querySelector('.selected') !== null) {
      const selectedItem = document.querySelector('.selected');
      if (orderedList.firstElementChild !== selectedItem) {
        orderedList.insertBefore(selectedItem, selectedItem.previousElementSibling);
      }
    }
  });
}

moveUp();

function moveDown() {
  downButton.addEventListener('click', () => {
    if (document.querySelector('.selected') !== null) {
      const selectedItem = document.querySelector('.selected');
      if (orderedList.lastElementChild !== selectedItem) {
        orderedList.insertBefore(selectedItem, selectedItem.nextElementSibling.nextElementSibling);
      }
    }
  });
}

moveDown();

function removeSelected() {
  removeButton.addEventListener('click', () => {
    if (document.querySelector('.selected') !== null) {
      document.querySelector('.selected').remove();
    }
  });
}

removeSelected();
