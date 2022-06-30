// Looping arrays
let names = [ "Chantal", "John", "Maxime", "Bobbi", "Jair"] ;

for ( let i = 0; i < names.length; i++) {
    console.log( names[i]);
}

// for of loop
console.log('\nfor of loop:')
var array_of_cars = [ 'Benz', 'Ford', 'Chevrolet', 'Volvo', 'Rolls Royce' ];

for ( let car of array_of_cars ) {
    console.log(car)
}

// Exercise 1: for of loop
// This exercise will construct an array as it loops through the incrementing values of x. Once the array is done, this exercise also will demonstrate several ways to output array contents.
// 1. Create an empty array
let arr = [];
// 2. Run a loop 10 times, adding a new incrementing value to the array
for ( let i = 0; i <= 10; i++) {
    arr.push(i)
}
// 3. Log the array into the console
console.log(arr);
// 4. Use the for loop to iterate through the array (adjust the number of iterations to however many values are in your array) and output into the console.
for (let i = 0; i< arr.length; i++){
    console.log(arr[i]);
}
// 5. Use the for of loop to output the value into the console from the array
console.log( '\nstep 5') //new line 
for ( let value of arr) {
    console.log(value)
}