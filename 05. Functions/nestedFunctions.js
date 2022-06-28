// Nested Functions
// Function Definition
function main(){
    console.log('Good morning');
    function innerFunction(){
        console.log('How are you?');
    }
    innerFunction();
}
main();

// class Work 1 : Nested Function (Submit to the google class room)
// class Work 3 : Submit to the google class room
// i. Declare a variable and assign to it a prompt from the user
let userResponse = window.prompt("What is your name?");
// ii. Use the response from the user to say the name.
// 1a. Create a function call it sayMyName.
//       1b. Declare sayMyName with a parameter value
function sayMyName( a ){
    console.log(a);
    // 2a. Create another function inside sayMyName, call it: nestedFucntion
    //      2b. Declare nestedFunction with a parameter value as well.
    function nestedFunction(param ){
        // 3. print out a message containing the name of the user in the nestedFunction that you created.
        console.log( "user's name is: " + param );

    }
    nestedFunction(a);
}
sayMyName(userResponse);