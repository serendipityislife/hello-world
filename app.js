// ## Spread Operator ##

function greet (person1, person2) {
    console.log('Hello ' + person1 +' and ' + person2);
}
let names = ['John', 'Mary'];
greet(...names);

function display(char1, char2, char3, char4, ...others){
    console.log(others);
    console.log(char1, char2, char3, char4);
} 

let letters = 'abcdefgh';
display(...letters);


/*
// ## Rest Parameters ## - The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10

function greet(message, ...names) {
    console.log(message + ' everyone!');
    names.forEach(name => console.log('Hi ' + name));
}

greet('Hellloooo','joe', 'asdf', 'Kooos');


// ## (5) Default Parameters ##

function sayHi(message, name = 'World'){
    console.log(message + name);
}

sayHi('Hello ');
sayHi('Hi ','Katelyn');


// ## parseInt ##

console.log(parseInt('F', 16)); // 15
console.log(parseInt('15',10)); //15
console.log(parseInt('Hi', 10)); //NaN


// ## parseFloat ##

console.log(parseFloat('3.99')); // 3.99
console.log(parseFloat('3.99e-1')); // 0.399
console.log(parseFloat('')); //NaN

// ## escape ##
// The escape() function was deprecated in JavaScript version 1.5. Use encodeURI() or encodeURIComponent() instead. The escape() function encodes a string.

console.log(escape('text'));
console.log(escape('asf@%$'));

// ## unescape ##
//The unescape() function was deprecated in JavaScript version 1.5. Use decodeURI() or decodeURIComponent() instead.
//The unescape() function decodes an encoded string.

console.log(unescape('asf@%25%24'));

// ## eval ##
Research on why one would use eval:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval:
!!!!Warning: Executing JavaScript from a string is an enormous security risk. It is far too easy for a bad actor to run arbitrary code when you use eval(). See Never use eval()!, below.
The eval() function evaluates JavaScript code represented as a string.


https://javascript.info/eval  In modern programming eval is used very sparingly. It’s often said that “eval is evil”.
Right now, there’s almost no reason to use eval. If someone is using it, there’s a good chance they can replace it with a modern language construct or a JavaScript Module.

The eval() function evaluates or executes an argument.
If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements.
The built-in eval function allows to execute a string of code.

let x = 1;
let y = 2;
let s = 'asb';
console.log(eval('x+y+s'));
//not sure about purpose of eval if below returns the same result:
console.log(x+y+s);


//extras - from W3Schools
let q = 10;
let w = 20;
let a = eval("q * w");
let b = eval("2 + 2");
let c = eval("q + 17");

let res = a + b + c;
console.log(a);
console.log(b);
console.log(c);


// ## bind() ##

let p1 = {name: 'Mary',
          getName: function(){
              return this.name;
          }
};
let p2 = {name: 'John'};
let getNameCopy = p1.getName.bind(p2);
console.log(getNameCopy());  // John
console.log(getNameCopy);  // return this.name;  <- copy of getName function (just as FYI)

// ## apply() ##

function intro(name, profession){
    console.log("My name is " + name + " and I am a " + profession + ".");
}

intro("John", "student");

intro.apply(undefined,["Mary", "lawyer"]);
intro.call(undefined,"James", "artist");


//## call() ##

let person1 = {name: 'John', age: 22}
let person2 = {name: 'Mary', age: 26}

let sayHi = function(){
    console.log('Hi ' + this.name);
}

sayHi();                //Hi
sayHi.call(person1);    //Hi John
sayHi.call(person2);    // Hi Mary

let sayHey = function(message){
    console.log(message + ', ' + this.name);
}

sayHey.call(person1, 'Hi'); //Hi, John


// ## Arrow Functions ## do not have their own this value!
let sum = (num1, num2) => num1 + num2;

let output = sum(12,23);
console.log(output);


let message = {
    name: 'John',
    regularFunction: function () {
        console.log(this);
        console.log('Hello ' + this.name); // Returns Hi John
    },
    arrowFunction: () => console.log('Hi ' + this.name) //RETURNS Hi
}
message.regularFunction();
message.arrowFunction();
console.log(this);                  // returns window object


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
