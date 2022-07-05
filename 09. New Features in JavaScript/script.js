// JavaScript New Features
// Default Parameter
function addTwoNumbers(x = 20 , y = 10 ) {
    console.log( x + y )
}
addTwoNumbers( )

// Spread Operator
// Spread with array literals
// Consists of three dots used before a referenced expression or string, and it spreads out the arguments or elements of an array
let one = ["so", "much", "fun"]
let two = ["JavaScript", "is", ...one, "and", "very",
"powerful"]
console.log( two.join(' ') ) // join() array method is used to convert an array to a string!

// Example
function multiplyTwoNumbers(x, y) {
    console.log(x * y);
}
let numbers = [ 5 , 2 ]
multiplyTwoNumbers( ...numbers )

// Spread with objects
const morning = {
    breakfast: 'oatmeal',
    lunch: 'peanut butter and jelly'
}
const foodBag = {
    ...morning,
    dinner: 'Eba'
}
console.log(foodBag)

// Rest parameter
// Similar to the spread operator, we have the rest parameter. It has the same symbol as the spread operator, but it is used inside the function parameter list
function someFunction(param1, ...param2) {
    console.log(param1, param2);
    console.log(param1, param2[0], param2[1] );
}
someFunction("hi", "there!", "How are you?")

// Destructuring Arrays
// Let's say we want to assign the first value of an array to a variable name:
var arr= [1,2,3,4,5]
var firstValue = arr[0]
console.log(firstValue)

let [firstName] = [ 'Ediro', 'PrinceWill', 'Felix', 'Elisha' ]
console.log( firstName )
// The 3 commas below used inside the destructured array is called 'list matching'
const [, , , lastName] =  [ 'Ediro', 'PrinceWill', 'Felix', 'Elisha' ]
console.log( lastName )

// Destructuring Objects
const sandwich = {
    bread: "soft bread",
    meat: "tuna",
    cheese: "swiss",
    toppings: ["lettuce", "tomato", "mustard"]
}
const { bread } = sandwich
console.log( bread )

// Destructuring parameters
function someFunction(...parameters ) {
    const [ first_value, second_value, third_value] = parameters
    console.log( first_value , second_value, third_value)
    }
someFunction("I", "Love JavaScript So much!", "What about you?");

// Projects