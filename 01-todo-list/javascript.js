// Variables
const textInput = document.querySelector("#list-input");
const submitBtn = document.querySelector("#submit");
const clearAllBtn = document.querySelector("#clear-all");
const toDoList = document.querySelector("#to-do-list");

// Events
submitBtn.onclick = addToList;

// Functions
function addToList() {
  const listItem = document.createElement("li");
  console.log("Created <li> for the information input");

  listItem.classList.add("listItem");
  console.log("Not sure why this is going on");

  listItem.textContent = textInput.value;
  console.log("Gets value from input field and uses it for element");

  toDoList.appendChild(listItem);
  console.log("Added new element to the list");

  textInput.value = "";
  console.log("Reset the input field");
}
