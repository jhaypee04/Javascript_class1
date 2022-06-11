//  Basic Functions
//  What is a function?
//  A function performs a task, gives us results, and does something!
//  Syntax:
//  function theNameOfTheFunction() {
//  code to execute!
//  }
//  Example of a Basic function:
//  Delaring a function below
//  function sayHello() {
//      console.log("Hello?");
//  }
//  // Invoking a function
//  sayHello();

//  Naming Functions
//  1. Use camelCase for your functions
//  2. Make sure that the name describes what the function is doing
//  3. Use a verb to describe what the function is doing

//  Class Work 1:
// We are going to create a program that will randomly describe an inputted name.
// 1. Create an array of descriptive words.
// 2. Create a function that contains a prompt asking the user for a name.
// 3. Select a random value from the array using Math.random.
// 4. Output into the console the prompt value and the randomly selected array value.
// 5. Invoke the function.

//  Solution
//  1.
//   var arr = [ "super", "wonderful", "bad", "angry", "careful"];
//  // 2.
//  function askName(){
//      let name = prompt("What is your name? ");
//      // 3.  
//      let randDescName = Math.floor( Math.random() * arr.length);
//      console.log(randDescName);
//      // 4.
//      console.log( arr[randDescName] + " " + name  );
//  }
//  // 5.
//  askName();


