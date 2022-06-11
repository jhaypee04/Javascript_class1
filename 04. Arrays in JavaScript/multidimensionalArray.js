// Multidimensional Arrays
let arrOfArrays = [ 
    [ 1, 2, 3 ], // =  arrOfArrays[0]
    [ 4, 5, 6 ], // =  arrOfArrays[1]
    [ 7, 8, 9 ] // =  arrOfArrays[2]
 ];
//   Accessing a Multidimensional Array
 console.log( arrOfArrays[0] [1] ); // value is 2

 // We can also have arrays nested deeper
 let arr3dim = [
     [ [1,2,3], [4,5,6], [7,8,9] ], // arr3dim[0] = 1st array
     [ [1,2,3], [4,5,6], [7,8,9] ], // arr3dim[1] = 2nd array
     [ [1,2,3], [4,5,6], [7,8,9] ]  // arr3dim[2] = 3rd array
 ]

 // Accessing the middle element which is 5
console.log( arr3dim[1][1][1] ); // value is ...5

// Class Work 2
// 1. Create an array containing three values: 1, 2, and 3.
// 2. Nest the original array into a new array three times.
// 3. Output the value 2 from one of the arrays into the console.