
// Get the header element
const header = document.getElementsByTagName('header');

console.log(header);

// Get all the section elements
const section = document.querySelectorAll('section');

console.log(section);

//Get the section element with class="current"
const current = document.querySelector('section.current');

console.log(current);

// Get the section that comes after the current section
const nextCurrent = current.nextElementSibling;

console.log(nextCurrent);

// Get the h2 node from the section before the 'current' section
const beforeCurrentH2 = current.previousElementSibling.children;

console.log(beforeCurrentH2);

// Get the div that contains the section that has an h2 with a class of 'highlight'
console.log(document.querySelectorAll('h2.highlight')[0].parentElement.parentElement)

// Get all the sections that contain an H2 (using a single statement);

console.log(document.querySelectorAll('h2').parentElement);


