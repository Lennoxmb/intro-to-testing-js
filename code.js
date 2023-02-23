// helloWorld function

function isNumericOrNumericString(input) {
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== 'boolean'
}
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input){
    if (input === true){
        return "Hello, World!"
    } else if (input === false) {
        return "Hello, World!"
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(x){
    return x === 5;
}

function isEven(x){
    return x % 2 === 0;
}

function isVowel(x){
    return x === 'b';
}
function add(x, y) {
    return x + y;
}