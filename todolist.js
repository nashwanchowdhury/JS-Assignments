// Create a to-do list and it must accomplish the following things:

// Show an unordered list of to-do items
// Show an input to enter a new to-do
// Show a button to add a to-do. When the button is clicked:
// The text from the input box is used to add a list item to the bottom of the list
// The text from the input box is cleared out.
// When the user clicks on a list item, it is removed

function addTask() {
    let newTask = document.getElementById('newtask').value;
    let newLi = document.createElement('li');
    newLi.addEventListener('click', function(event){
        newLi.remove();
    })
    newLi.innerHTML = newTask;
    let list = document.querySelector('ul')
    list.appendChild(newLi)
    document.getElementById('newtask').value = '';
}

