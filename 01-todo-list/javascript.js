// Variables
const textInput = document.querySelector("#list-input");
const submitBtn = document.querySelector("#submit");
const clearAllBtn = document.querySelector("#clear-all");
const toDoList = document.querySelector("#to-do-list");

// Events
submitBtn.onclick = addToList;
clearAllBtn.onclick = clearAll;

// Functions
function addToList(event) {
  event.preventDefault();
  const inputValue = textInput.value.trim();
  if (textInput !== null && inputValue !== "") {
    const listItem = document.createElement("li");

    listItem.classList.add("listItem");
    listItem.textContent = textInput.value;
    toDoList.appendChild(listItem);
    textInput.value = "";
  } // This function will add the user input to the To-Do List when the input is not empty.
}

function clearAll() {
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.firstChild);
  } // This function will remove all items from the list.
}
