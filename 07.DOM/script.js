//DOM
// To get html elements using the DOM. We have a special object to helo us. This is the document object.
// Getting Id from our HTMl
var element = document.getElementById('element');
console.log(element);
element.innerHTML = 'Hello World';
//Class Work 1
// Try experimenting with getting elements by their IDs:
// 1. Create an HTML element and assign an ID in the element attribute.
// 2. Select the page element using its ID.
//Correction
var dennis = document.getElementById('when');
// 3. Output the selected page element into the console
console.log(dennis);

//Getting CLASS from HTML
var h1Element = document.getElementsByClassName('h1Element'); // array of elements
console.log(h1Element[0]);
console.log(h1Element[1]);
console.log(h1Element[2]);

//Class Work 2
// Select all matching page elements using the class name of the element.
// 1. Create a simple HTML file to work on.

// 2. Add three HTML elements adding the same class to each. You can use different tags as long as the same element class is included. Add some content within each element so you can distinguish between them.

// 3. Add a script element to your file, and within it select the page elements by class name. Assign the resulting HTMLCollection values to a variable.

// 4. You can use an index value to select the individual HTMLCollection items, just as you would for array items. Starting with an index of 0, select one of the page elements with the class name and output the element into the console.
var h1 = document.getElementsByClassName('h1');
console.log(h1[0]);

//Accessing Element with a CSS Selector
// querySelector(h1) //Single first h1
// or querySelectorAll('h1') // All h1 returns an array

var elem = document.querySelector('h1');
console.log(elem);
var elem = document.querySelectorAll('h1');
console.log(elem);

// Class Work 3
// Use querySelector() to enable single element selection:
// 1. Create another simple HTML file.
// 2. Create four HTML elements adding the same class to each. They can be
// different tag names as long as they have the class within the element
// attribute.
// 3. Add some content within each element so you can distinguish between them.
// 4. Within a script element, use querySelector() to select the first occurrence of the elements with that class and store it in a variable. If there is more than
// one matching result in querySelector(), it will return the first one.
// 5. Output the element into the console.

//Class Work 4
// Use querySelectorAll() to select all matching elements in an HTML file:
// 1. Create an HTML file and add four HTML elements, adding the same class to
// each one.
// 2. Add some content within each element so you can distinguish between them.
// 3. Within a script element, use QuerySelectorAll() to select all the matching
// occurrences of the elements with that class and store them in a variable.
// 4. Output all the elements into the console, first as an array and then looping
// through them to output them one by one.

// Looping an array
// We have two methods to loop an array
let arr = [1,2,3,4,4,5];
//using for loop
for (let i = 0; i < arr.length; i++ ){
    console.log(arr[i]);
}
