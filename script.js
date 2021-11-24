const taskList = 'lista-tarefas';
const orderedList = document.getElementById(taskList);

window.onload = () => {
  orderedList.innerHTML = localStorage.getItem('Tasks');
};

function addListItem() {
  const taskInput = document.getElementById('texto-tarefa');
  const addButton = document.getElementById('criar-tarefa');
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
    if (item.id !== taskList) {
      resetGreyItem();
      item.classList.add('selected');
    }
  });
}

greyBackground();

function setAsCompleted() {
  orderedList.addEventListener('dblclick', (event) => {
    const item = event.target;
    if (item.id !== taskList) {
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
  const eraseButton = document.getElementById('apaga-tudo');
  eraseButton.addEventListener('click', () => {
    while (orderedList.firstChild) {
      orderedList.removeChild(orderedList.firstChild);
    }
  });
}

eraseList();

function eraseCompleted() {
  const completedButton = document.getElementById('remover-finalizados');
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
  const saveButton = document.getElementById('salvar-tarefas');
  saveButton.addEventListener('click', () => {
    localStorage.setItem('Tasks', orderedList.innerHTML);
  });
}

storeListItems();

function moveUp() {
  const upButton = document.getElementById('mover-cima');
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
  const downButton = document.getElementById('mover-baixo');
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
  const removeButton = document.getElementById('remover-selecionado');
  removeButton.addEventListener('click', () => {
    if (document.querySelector('.selected') !== null) {
      document.querySelector('.selected').remove();
    }
  });
}

removeSelected();
