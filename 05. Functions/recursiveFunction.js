// Recursive Functions
// Calling same function from inside the function.
function aRecursiveFunction(param){
    console.log(param);
    if (param > 0) {
        aRecursiveFunction(--param);
    }
}
aRecursiveFunction(3);