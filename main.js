const todoList = document.querySelector("todoList");

let addTodo = function (todo) {
  // create list items
  const listItem = document.createElement("li");
  const checkBox = document.createElement("input");
  const label = document.createElement("label");
  const deleteButton = document.createElement("button");

  // add attribe  and names to input
  checkBox.setAttribute("type", "checkbox");
  deleteButton.setAttribute("class", "delete");

  label.innerHTML = todo;
  deleteButton.innerHTML = "Delete";

  //   Append stuff
  listItem.appendChild(checkBox, label, deleteButton);
};
