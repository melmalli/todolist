const form = document.querySelector("#form");
const input = document.querySelector("#input");
const toDoList = document.querySelector("#todo_list");
const resetButton = document.querySelector("#reset_button");

// When a task is added
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newListItem = document.createElement("li");
  newListItem.id = "task";
  newListItem.classList.add("active");
  const deleteButton = document.createElement("span");
  deleteButton.innerHTML =
    "<img src='delete.svg' alt='delete' id='delete_button'>";
  deleteButton.addEventListener("click", () => {
    deleteButton.parentElement.remove();
  });
  newListItem.innerText = input.value;
  newListItem.appendChild(deleteButton);
  toDoList.append(newListItem);
  input.value = "";
});

// When a task is clicked
toDoList.addEventListener("click", (e) => {
  let listItem = e.target;
  const recycleButton = document.createElement("span");
  recycleButton.innerHTML =
    "<img src='recycle.svg' alt='recycle' id='recycle_button'>";
  recycleButton.classList.add("hide");
  if (listItem.tagName === "LI") {
    listItem.classList.add("grayed-out");
    listItem.classList.remove("active");
    recycleButton.classList.remove("hide");
    listItem.appendChild(recycleButton);
    listItem.remove();
    toDoList.append(listItem);
  }
  recycleButton.addEventListener("click", () => {
    recycleButton.parentElement.classList.remove("grayed-out");
    recycleButton.parentElement.classList.add("active");
    recycleButton.classList.add("hidden");
    toDoList.prepend(recycleButton.parentElement);
  });
});

// When reset button pressed
resetButton.addEventListener("click", () => {
  toDoList.innerHTML = null;
});
