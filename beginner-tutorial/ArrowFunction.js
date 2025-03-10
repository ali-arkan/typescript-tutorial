//Fat Arrow Function - 2 parameters
/* var sum=(x:number,y:number):number => //OK
    {
        return x+y;
    }

console.log(sum(20,30)); */
//** Fat Arrow Function - without parameters
/* // Correct way to define an arrow function with curly brackets
const print = () => {
    console.log("Welcome");
};

// Correct way to define an arrow function without curly brackets (when there's a single statement)
const printCompact = () => console.log("Welcome");

// Calling the functions
print();
printCompact(); */
//** Fat Arrow Function - with parameters
var sum = function (x, y) {
    return x + y;
};
var sum = function (x, y) { return x + y; }; // Optional 2, better way
console.log(sum(10, 20));
