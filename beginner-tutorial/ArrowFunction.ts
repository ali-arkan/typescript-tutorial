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
var sum = (x:number,y:number):number => // Optional 1
{
    return x+y;
}

var sum=(x:number,y:number) => x+y; // Optional 2, better way
console.log (sum(10,20));