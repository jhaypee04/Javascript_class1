// Array Methods
// forEach()
let arr = [ 'grapefruit', 4, 'hello', 5.6, true ]
arr.forEach(printStuff)
// the forEach() method returns a callback
function printStuff(e, i, a){
    console.log(e , i , a);
}

// filter()
// returns a new array
// with values that meet the condition in the callback function
var newArray = arr.filter( onlyStrings )

function onlyStrings( e ){
    if ( (typeof e == "string") == true ){
        return e;
    } 
}
console.log(newArray)

// map()
// returns a new array
// allowing us the privilege to work with/on the array values
let num = [1,2,3,4,5,6,7,8,9]
var multiply_by_2 = num.map( multiply2 )

function multiply2( e ) {
    return e * 2
}
console.log( multiply_by_2 )

// reduce
// returns a value
var initialValue = 0
var newValue = num.reduce( addAll , initialValue)
function addAll( previousResult , nextValue ) {
    return previousResult + nextValue
}
console.log(newValue)