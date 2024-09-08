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

  todoList.forEach(function (todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `<div>${name}</div><div>${dueDate}</div><button class="delete-todo-button"  onclick='todoList.splice(${index}, 1);renderTodoList()'>Delete</button>`;
    todoListHTML += html;
  });
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  // for (let i = 0; i < todoList.length; i++) {
  //   const todoObject = todoList[i];
  //   const { name, dueDate } = todoObject;
  //   const html = `<div>${name}</div><div>${dueDate}</div><button class="delete-todo-button"  onclick='todoList.splice(${i}, 1);renderTodoList()'>Delete</button>`;
  //   todoListHTML += html;
  // }
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  const dateElement = document.querySelector(".js-date");
  const dueDate = dateElement.value;

  todoList.push({
    name,
    dueDate,
  });
  inputElement.value = "";
  dateElement.value = "";

  renderTodoList();
}
