
// ## Arrow Functions ##


/*
//## Closures ##  Prevents variables from going out of scope

//example1
let greeting = (function(){
    let message = 'Hello in invoked';
    let getMessage = function(){
        return message;
    };
    return {                            //Closure right here: return object with the value of getMessage
        getMessage: getMessage,         //Property getMessage and the value is the function getMessage. Typically property and value names are the same but they dont have to be
    };                                  //This object gets assigned to the greeting variable
})();

console.log(greeting.getMessage());

//example2

function setupCounter(val){
    return function counter(){
        return val++;
    }
}

let counter1 = setupCounter(0);         //Has it's own environment and variables
console.log(counter1());
console.log(counter1());
let counter2 = setupCounter(120);       //Has it's own environment and variables 
console.log(counter2());
console.log(counter2());
console.log(counter2());

*/


/*
## IIFE Immediately Invoked Function Expression ##

// Normal Function Expression
function greeting(){
    console.log('Hello normal function where it had to be called');
}

greeting();

// IIFE - invokes immediately where it is defined

(function(){
    console.log('Hello immediately invoked');
})();
*/

/*

function greeting(){
    let message = 'Hello';
    let sayHi = function hi(){
        let message = 'Hi';
    };
    sayHi();
    console.log(message);       //Hello not Hi
}

greeting();


function sum( num1, num2){
    return num1 + num2;
}

let result = sum(5, 2);
console.log(result);


console.log("Hello World");

function greetings(name) {
    return "Hello " + name;
}
let message = greetings("John");
console.log(message);


function greetings(name) {
    console.log( "Hello " + name);
}

let name = 'John';
greetings(name);
name = 'Mary';
greetings(name);


function printAll(){
    for( let i=0; i < arguments.length ; i++ );
    return arguments;
}

let count = printAll( 5,324,23,1,2,3,432);
    console.log(count);

function printAll2(){
    for( let i = 0; i<arguments.length ; i++);
    console.log(arguments);
}

printAll2(564, 654, 1, 0, 65);
let x = [23123, 1, 2, 2, 5];
printAll2(x);   //different output




let maximum = findMax(54, 445, 344, 1, 12, 324);
console.log(maximum);
*/
