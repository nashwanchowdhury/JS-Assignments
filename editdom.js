// Update the 'Apples' item to say 'Granny Smith Apples'
const li = document.querySelectorAll('li');
li[1].innerHTML = 'Granny Smith Apples';

// Remove 'Oat Milk' from the list
li[3].remove();
// Add an item 'Kombucha'
const newLi = document.createElement('li');
newLi.innerHTML = 'Kombucha';

const list = document.querySelector('ul');
list.appendChild(newLi);
// Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']
let array = ['protein bars', 'almonds', 'peanut butter'];

li[0].remove();
const one = document.createElement('li');
one.innerHTML = 'Protein bars';
list.appendChild(one)
li[1].remove();
const two = document.createElement('li');
two.innerHTML = 'Almonds'
list.appendChild(two)
li[2].remove();
const three = document.createElement('li');
three.innerHTML = 'Peanut butter'
list.appendChild(three)
newLi.remove();

// Add the class 'important' to the almonds item.

two.className = 'important';

