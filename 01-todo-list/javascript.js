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
  event.preventDefault(); // Prevent default submit event from happening.
  const inputValue = textInput.value.trim(); // Trim spaces from the input
  if (textInput !== null && inputValue !== "") {
    // If there is input continue
    const listItem = document.createElement("li"); // Create <li> item
    const div = document.createElement("div"); // Create <div> item
    const button = document.createElement("button"); // Create delete button
    button.textContent = "X"; // Fill button with X as text
    button.classList.add("btn", "delBtn"); // Add classes to the button
    button.addEventListener("click", () => {
      // Add event listener to button
      const thisItem = button.parentElement; // Select parent element
      toDoList.removeChild(thisItem); // Delete selected element
    });
    listItem.classList.add("listItem"); // Add class to each <li> item
    div.textContent = textInput.value; // Add input value to the <div>
    listItem.appendChild(div); // Append div as a child of listItem or <li>
    listItem.appendChild(button); // Append button as a child of listItem or <li>
    toDoList.appendChild(listItem); // Append the list item to the html Ordered List
    textInput.value = ""; // Return input value to empty
    textInput.focus(); // Focus on textInput
  } // This function will add the user input to the To-Do List when the input is not empty.
}

function clearAll() {
  // Clears all list items
  while (toDoList.firstChild) {
    // while the ordered list has a child, do:
    toDoList.removeChild(toDoList.firstChild); // Remove selected child
  } // This function will remove all items from the list.
}
