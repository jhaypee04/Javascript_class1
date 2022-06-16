// Objests
//Syntax
var car = {
    name: 'Ford',
    model: 'F150',
    year: 2021,
    color: 'grey',
    mileage: 2000
};
let dog = {
    dogName: 'Nbuzo',
    weight: 4.2,
    color: 'red',
    breed: 'Chiwawa',
    age: 3,
    burglarBitter: true
};
// Referencing/Getting the Values from the Object
var nameOfOurDog = dog.dogName; // 1. Dot notation is used to reference the object values
console.log( nameOfOurDog );
// Updating Objects
dog.weight = 5.3;
console.log( dog );

// Class Work
// 1. Create a new myCar object for a car. Add some properties, including, but not limited to, make and model, and values for a typical car or your car. Feel free to use booleans, strings, or numbers.
//Solution
let myCar = {
    make: 'Camry',
    model: 'XL',
    // forSale: '',
    year: 2018,
    color: 'Navy Blue'
}
// 2. Create a variable that can hold the string value color. This variable containing a string value color can now be used to reference the property name within myCar. Then, use the variable within the square bracket notation to assign a new value to the color property in myCar.
// dog['weight'] // 2. Square Bracket Notation
//Solution
let aVariable = 'color';
myCar[aVariable] = 'Red';
console.log(myCar);
// 3. Use that same variable and assign a new property string value to it, such as forSale. Use the bracket notation once again to assign a new value to the forSale property to indicate whether the car is available for purchase.
//Solution
// myCar['forSale'] = 'available for purchase';
aVariable = 'forSale'
myCar[aVariable] = "forSale";
// 4. Output make and model into the console.
var makeOfCar = myCar.make;
var modelOfCar = myCar.model;
console.log(makeOfCar);
console.log(modelOfCar);

// 5. Output the value of forSale into the console.
console.log( myCar.forSale );

//Nesting Objects and Arrays
var myCar1 = {
    makes: {
        //Object in Object
        carName1: 'Benz',
        carName2: 'Camry',
        carName3: 'Ford',
    } ,
    color: 'black',
    speed: '300kmh',
    //Array in Object
    model: [ 'ESeries', 'PencilLight' ]
}
// Referencing the values from nested objects and arrays
// For Arrays
var model = myCar1.model[1];
console.log(model);
//For Objects
var make = myCar1.makes.carName2;
console.log(make);

// Objects in array
//Syntax
var arr = [ {}, {}, {} ];
var arr = [
    {
        a: 'value1',
        b: 'value2',
        c: 'value3',
    },
    {
        d: 'value1',
        e: 'value2',
        f: 'value3',
    }
];
var addresses = [
    {
        street: 'Okpoyo',
        number: 4,
        zipCode: 123456,
        city: 'PH City',
        state: 'Rivers'
    },
    {
        street: 'Ist Boulevard Ave',
        number: 13,
        zipCode: 1236,
        city: 'Somewhere in Anywhere',
        state: 'I dont know'
    }
];
let streetName = addresses[0].street;
console.log(streetName);

// Class Work 2
// 1. Create an object named people that contains an empty array that is called friends.
//Solution
var people = {
    friends: []
};
// 2. Create three variables, each containing an object, that contains one of your friend's first names, last names, and an ID value.
var friend1 = {
    firstName: 'Othniel',
    lastName: 'Solomon',
    id: 'comrade'
}
var friend2 = {
    firstName: 'Daniel',
    lastName: 'HappyMan',
    id: '556'
}
var friend3 = {
    firstName: 'Bolaji',
    lastName: 'Yoruba',
    id: 'Agba Owo'
}
// 3. Add the three friends to the friend array.
//Solution
//Nice approach: Dynamic
let ar = 'friends';
people[ar] = [friend1,friend2,friend3];
console.log(people);
//Harcoding
let people = {
    friends: [ data1, data2, data3 ]
};

// Class Work 3 (Submit to Google ClassRoom )
// Title: Company product catalog
// In this project, you will implement a data structure for a product catalog and create queries to retrieve data.
// 1. Create an array to hold an inventory of store items.
// 2. Create three items, each having the properties of name, model, cost, and quantity.
// 3. Add all three objects to the main array using an array method, and then log the inventory array to the console.
// 4. Access the quantity element of your third item, and log it to the console.
// Experiment by adding and accessing more elements within your data structure.