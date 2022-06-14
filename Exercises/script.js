// Take Home Assignment
// 1. Create a variable called prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value "My Selection: "
// 4. Using the switch statement (and creativity), provide a response back regarding a prize that is awarded depending on what number is selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize variable strings and the output message string

//Solution
// 1.
// var prize = prompt('Insert a number between 0 and 10');
// console.log( typeof prize ); // string
// // 2.
// var newPrize = Number(prize);
// console.log( typeof newPrize); // number
// // 3.
// var message = "My Selection: ";
// // 4.
// switch(newPrize){
//     case 0:
//         message = message + newPrize + ". I won the prize!";
//         break;
//     case 1:
//         // message = message + newPrize; is the same as
//         message += newPrize;
//         // 5.
//         break;
//     case 2:
//         message += newPrize;
//         // 5.
//         break;
//     case 3:
//         message += newPrize;
//         // 5.
//         break;
//     case 4:
//         message += newPrize;
//         break;
//     case 5:
//         message += newPrize;
//         break;
//     case 6:
//         message += newPrize;
//         break;
//     case 7:
//         message += newPrize;
//         break;
//     case 8:
//         message += newPrize;
//         break;
//     case 9:
//         message += newPrize;
//         break;
//     case 10:
//         message += newPrize;
//         break;
// }
// // 6.
// console.log(message);

// Manipulating arrays
// const aList = [ 'Lawrence', 'Svekis', true, 35, null, undefined, [ 'one', 'two' ] ];

// Manipulate the  array above using the following methods: pop(), push(), shift(), and unshift(), and transform it into the following:

//     ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]

//  You can take the following steps, or adopt your own approach:
//      • Remove the first item and the last item.
//      • Add FIRST to the start of the array.
//      • Assign hello World to the fourth item value.
//      • Assign MIDDLE to the third index value.
//      • Add LAST to the last position in the array.
//      • Output it to the console. (POST YOUR ANSWER TO THE GOOGLE CLASSROOM)

// Solution
// The given array is
// const arrayList = [ 'Lawrence', 'Svekis', true, 35, null, undefined, [ 'one', 'two' ] ];
// // Step one:
// arrayList.shift();
// arrayList.pop();
// console.log(arrayList);

// // Step two
// // first method uses the index
// // arrayList[0] = 'FIRST';
// // console.log(arrayList);
// // second method using unshift
// arrayList.unshift('FIRST');
// console.log(arrayList);

// // Step three
// arrayList[3] = 'Hello World';
// console.log(arrayList);

// // Step four
// arrayList[2] = 'MIDDLE';
// console.log(arrayList);

// // Step five
// arrayList.push('LAST');
// console.log(arrayList);

//Class work 2 on arrays
// 1. Create an array containing three values: 1, 2, and 3.
//  2. Nest the original array into a new array three times.
//  3. Output the value 2 from one of the arrays into the console.

// Solution
// 1.
// var array = [ 1, 2, 3];
// var newArray = [
//     [ 1, 2, 3], [ 1, 2, 3], [ 1, 2, 3]
// ]
// var value2 = newArray[2][1];
// console.log(value2);

// Small Exercise with Solution
// 1. Create a prompt to ask the user's age
// var userAge = prompt('How old are you?'); // return string
// // 2. Convert the response from the prompt to a number (use this in built function: number()  )
// var newUserAge = Number(userAge);
// // 3. Declare a message variable that you will use to hold the console message for the user
// var message;
// // 4. If the input age is equal to or greater than 21, set the message variable to "confirm entry to a venue and the ability to purchase alcohol"
// if ( newUserAge >= 21 ){
//     message = "confirm entry to a venue and the ability to purchase alcohol";
// }
// // 5. If the input age is equal to or greater than 19, set the message variable to "confirm entry to the venue but deny the purchase of alcohol"
// else if ( newUserAge >= 19 ) {
//     message = "confirm entry to the venue but deny the purchase of alcohol";
// }
// // 6. Provide a default else statement to set the message variable to deny entry if none are true
// else {
//     message = "deny entry";
// }
// // 7. Output the response message variable to the console
// console.log(message);

// Class Work (on Decision Making)
// 1. Create a variable with a Boolean value.
// var a = false;
// 2. Output the value of the variable to the console.
// console.log(a);
// 3. Check whether the variable is true and if so, output a message to the console, using the following syntax:
// if(myVariable) {
//     //action
// }
// if (a) {
//     console.log( ' a is true.');
// }
// 4. Add another if statement with a ! (NOT operator) in front of the variable to check whether the condition is not true, and create a message that will be printed to the console in that instance. You should have two if statements, one with a ! (Not Operator) and the other without. You could also use an if and an else statement instead - experiment!
// if (!a) {
//     console.log(" a is false");
// }
// 5. Change the variable (boolean value) to the opposite to see how the result changes(optional).



// Class Work 2 ( still on Decision Making)

// As discussed in JavaScript Fundamentals, the JavaScript function Math.random() will return a random number in the range of 0 to less than 1, including 0 but not 1. You can then scale it to the desired range by multiplying the result and using Math.floor() to round it down to the nearest whole number; for example, to generate a random number between 0 and 9: 

// //random number between 0 and 1
// let randomNumber = Math.random();
// //multiply by 10 to obtain a number between 0 and 10
// randomNumber = randomNumber * 10; // can return 8.9 = 8
// //so remove the decimal place value to provide a whole number using Math.floor
// RandomNumber = Math.floor(randomNumber);



// In this exercise, we'll create a Magic 8-Ball random answer generator:
// 1. Start by setting a variable that gets a random value assigned to it. The value is assigned by generating a random number 0-5, for 6 possible results. You can increase this number as you add more results.
var randomNumber = Math.random() * 6;
// To round my random number down, use Math.floor();
var newRand = Math.floor(randomNumber);
console.log(newRand);
// 2. Create a prompt that can get a string value input from a user that you can repeat back in the final output.
var userInput = prompt('What is your favourite language?');
// 3. Create 6 responses using the switch statement, each assigned to a different value from the random number generator.
var response;
var magicNumber;
switch(newRand) {
    case 0:
        magicNumber = newRand;
        // 4. Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values for each case, assigning new values depending on the results from the random value.
        response = 'You picked a magic number of: ' + magicNumber;
    break;
    case 1:
        magicNumber = newRand;
        // 4. Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values for each case, assigning new values depending on the results from the random value.
        response = 'You picked a magic number of: ' + magicNumber;
    break;
    case 2:
        magicNumber = newRand;
        // 4. Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values for each case, assigning new values depending on the results from the random value.
        response = 'You picked a magic number of: ' + magicNumber;
    break;
    case 3:
        magicNumber = newRand;
        // 4. Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values for each case, assigning new values depending on the results from the random value.
        response = 'You picked a magic number of: ' + magicNumber;
    break;
    case 4:
        magicNumber = newRand;
        // 4. Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values for each case, assigning new values depending on the results from the random value.
        response = 'You picked a magic number of: ' + magicNumber;
    break;
    case 5:
        magicNumber = newRand;
        // 4. Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values for each case, assigning new values depending on the results from the random value.
        response = 'You picked a magic number of: ' + magicNumber;
    break;
}
// 5. Output the user's original answer, plus the randomly selected case response to the console after the user enters their question.
console.log( userInput + ' ' + response);


// Class Work 3 (on Decision Making) Submit to the Google Classroom

// Applying our knowledge of Math.random. The JavaScript function Math.random() will return a random number in the range of 0 to less than 1, including 0 but not 1. You can then scale it to the desired range by multiplying the result and using Math.floor() to round it down to the nearest whole number; for example, to generate a random number between 0 and 9: 

// //random number between 0 and 1
// let randomNumber = Math.random();
// //multiply by 10 to obtain a number between 0 and 10
// randomNumber = randomNumber * 10; // can return 8.9 = 8
// //so remove the decimal place value to provide a whole number using Math.ceil
// RandomNumber = Math.floor(randomNumber);



// In this exercise, we'll create a Crucial random number generator:
// 1. Start by setting a variable( luckNumber) that gets a random value assigned to it. The value is assigned by generating a random number 0-7, for 8 possible results. You can increase this number as you add more results.
// 2. Create a prompt that can get a string value input from a user that you can repeat back in the final output.
// 3. Create 10 responses using the switch statement, each assigned to a different value from the random number generator.
// 4. Create a variable to hold the end response, which should be a sentence printed for the user. You can assign different string values for each case, assigning new values depending on the results from the random value.
// 5. Output the user's original answer, plus the randomly selected case response to the console after the user enters their question.