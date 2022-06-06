// // alert("Hello World");
// // Lets make a decision using the lightings.

// var _switch_on = true; //when it is on
// var _switch_off = false; //when it is off
// var bulb; //undefined

// //making decisions now using if else statements

// if(_switch_on){
//     bulb = "on";
//     document.write(`The bulb is ${bulb}!`);
// } else {
//     bulb = "off";
//     document.write(`The bulb is ${bulb}!`);
// }

// let rain = true;

// if(rain) {
//     console.log("Taking my umbrella when i need to go outside.");

// } else {
//     console.log("i can leave my umbrella at home.");

// }

// // //string concatenation
// // var _name = "Ike";
// // var message = "my name is:" + _name;
// // document.write(message);

// // //string Template literal
// // var n = "ikye";
// // var msg = `<br> My aka is ${n}`;
// // document.write(msg)

let _lesson = true;
let lesson = false;


if(_lesson){
    console.log("On my way there");
} else {
    console.log("I'm at home");
}

if(!lesson){
    console.log("Will never get there");
} else {
    console.log("coming")
}

let age = 10
let cost = 0;
let message;

if (age < 3 ) {
    cost = 0;
    message = "Access is free underf bthree years old.";

} else if ( (age >= 3 ) && (age < 12 ) ){
    cost = 5;
    message = "with the child discount, the fee is 5 dollars";

} else if (age >= 12 && age < 65 ){
    cost = 10;
    message = "A regular ticket cost 10 dollars";

} else {
    cost = 7;
    message = "A ticket is 7 dollars";

}
console.log(message);
console.log("Your Total cost" + cost);