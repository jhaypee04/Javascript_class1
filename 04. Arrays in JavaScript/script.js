// Arrays
// What is an Array?
// Arrays stores multiple values in one variable
// It is a data type that falls under the non-primitive
// Syntax:
// var any_variable_Name = []; // An empty array
//  var arr = [ 1, "Kenny", 3, 4, true, 56, 7, 8]; // An array with values;
console.log( arr[1] );  // Accessing the values from the arrays
 // Overriding the values in an array
 arr[1] = "Fola";
 console.log( arr[1] );

  // Methods
 // What is a method?
 // Methods are functions!
 // Examples of methods for array is 
 // 1. arr.length

 console.log( arr.length );

  // Deleting values from arrays
 // pop () //method deletes from the last
 // shift () //method deletes from the first
 console.log(arr);
 arr.pop(); // Deletes the last value(item)
 console.log(arr);
 arr.shift(); // Deletes the first value (item)
 console.log(arr);

 //  Adding values to arrays
// push () //method adds value from the last index
arr.push("PrinceWill");
console.log(arr);

// Class Work 1
// 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and "Apples."
// 2. Check your list length in the console.
// 3. Update "Bread" to "Bananas."
// 4. Output your entire list to the console.

// Solution
// var shopping_list = [  "Milk",  "Bread",  "Apples"  ];
// console.log(shopping_list);
// console.log(shopping_list.length);
// shopping_list[1] = "Bananas";
// console.log(shopping_list[1]);
// console.log(shopping_list);

// More methods in arrays
// sort() and reverse()
let names = [  "James", "Alicia", "Fatima", "Maria", "Bert"  ];
console.log(  names );
console.log(  names.sort()  );

// reverse()
let _names = [  "James", "Alicia", "Fatima", "Maria", "Bert"  ];
console.log(  _names );
console.log(  _names.reverse()  );

// Try out this method. Use www.devdocs.io to learn more about them:
// Slice 
// & 
// Splice

// Try this 
// Concat,
// IndexOf,
// includes 
// Unshift()