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

  todoList.forEach((todoObject, index) => {
    // short-cut for the object property
    const {name, dueDate } = todoObject;

    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton, index) => {
         deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
         })
      })
}

document.querySelector('.js-add-todo-button')
.addEventListener('keydown', () => {
  addTodo();
})

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