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
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.textContent = "X";
    button.classList.add("btn");
    button.addEventListener("click", () => {
      const thisItem = button.parentElement;
      toDoList.removeChild(thisItem);
    });
    listItem.classList.add("listItem");
    span.textContent = textInput.value;
    listItem.appendChild(span);
    listItem.appendChild(button);
    toDoList.appendChild(listItem);
    textInput.value = "";
    textInput.focus(); // Focus on textInput
  } // This function will add the user input to the To-Do List when the input is not empty.
}

function clearAll() {
  while (toDoList.firstChild) {
    toDoList.removeChild(toDoList.firstChild);
  } // This function will remove all items from the list.
}
