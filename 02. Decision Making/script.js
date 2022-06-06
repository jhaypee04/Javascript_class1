// alert("Hello World");
// Lets make a decision using the lightings.
// in this room
// var _switch_on = true;// when it is on
// var _switch_off = false; // when it is off
// var bulb; // undefined

// Making the decisions now using if else statements

// if(_switch_off) {
//     bulb = "on";
//     document.write(`The bulb is ${bulb}! `);
// } else {
//     bulb = "off";
//     document.write(`The bulb is ${bulb}! `);
// }

//Example 2
// let rain = true;

// if(rain) {
//     console.log("Taking my umbrella wheni need to go outside.");
// }else {
//     console.log("I can leave my umbrella at home.");
// }

// Class Work 1: Submit in GOOGLE CLASSROOM
// 1. Create a variable with a Boolean value.
// 2. Output the value of the variable to the console.
// 3. Check whether the variable is true and if so, output a message to the console,
// using the following syntax:
// if(myVariable){
// //action you want executed!
// }
// 4. Add another if statement with an ! in front of the variable to check whether
// the condition is not true, and create a message that will be printed to the
// console in that instance. You should have two if statements, one with an
// ! and the other without. You could also use an if and an else statement
// instead—experiment!
// 5. Change the variable to the opposite to see how the result changes.

/*  End of if else statement */

// There is another statement in JavaScript used in decision Making 
// It is the if else if statement

// let age = 10;
// let cost = 0;
// let message;

if ( age < 3 ) {
    cost = 0;
    message = "Access is free under three years old.";
} else if ( ( age >= 3 ) && ( age < 12 ) ) {
    cost = 5;
    message = "With the child discount, the fee is 5 dollars.";
} else if ( age >= 12 && age  < 65 ) {
    cost = 10;
    message = "A regular ticket costs 10 dollars.";
} else {
    cost = 7;
    message = "A ticket is 7 dollars.";
}
// console.log(message);
// console.log("Your Total cost " + cost);

// Class Work 2 : Submit to the Google ClassRoom
// 1. Create a prompt to ask the user's age
// 2. Convert the response from the prompt to a number
// 3. Declare a message variable that you will use to hold the console message for
// the user
// 4. If the input age is equal to or greater than 21, set the message variable to
// confirm entry to a venue and the ability to purchase alcohol
// 5. If the input age is equal to or greater than 19, set the message variable to
// confirm entry to the venue but deny the purchase of alcohol
// 6. Provide a default else statement to set the message variable to deny entry if
// none are true
// 7. Output the response message variable to the console

/* End of the if else if statement */

// There is another method to make decisions in JavaScript known as the Switch Statements
// Syntax for the switch statement is:

// switch(expression) {
//     case value1:
//         // code to be exeecuted is what would run here.
//         break;
//     case value2:
//         // code to be executed 
//         break;
//     case value-n:
//         // code to be executed
//         break;
//     default:
//         // code to be executed when no cases match
//         break;
// }

// Example 3
// var activity = "Lunch";

// switch(activity) {
//     case "Get up":
//         console.log("It is 6:30AM.");
//         break;
//     case "Drive to work":
//         console.log("It is 8:00AM");
//         break;
//     case "Lunch":
//         console.log("It is 12:00PM.");
//         break;
//     case "Drive home":
//         console.log("It is 6:30PM");
//         break;
//     case "Dinner":
//         console.log("It is 6:30PM");
//         break;
//     default:
//         console.log("I can not determine the current time.");
//         break;
// }

// Take Home Assignment
// Create a variable called prize and use a prompt to ask the user to set the
// value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value "My Selection: "
// 4. Using the switch statement (and creativity), provide a response back
// regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable strings and the output message string
