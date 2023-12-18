const todoList = [{ 
  name: 'make dinner',
  dueDate: '10-31-2023'
}, {
  name: 'wash dishes',
  dueDate: '10-31-2023' 
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // The object property

    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;

    // short-cut for the object property
    const {name, dueDate } = todoObject;

    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}