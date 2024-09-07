let todoList = [
  {
    name: "dinner",
    dueDate: "2022-12-22",
  },
  {
    name: "din",
    dueDate: "2022-12-22",
  },
];
renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `<p>${name} ${dueDate}<button onclick='todoList.splice(${i}, 1);renderTodoList()'>Delete</button></p>`;
    todoListHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  todoList.push(name);
  inputElement.value = "";

  renderTodoList();
}
