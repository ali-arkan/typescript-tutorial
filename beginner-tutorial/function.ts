//Named Function

/* function display()
{
    console.log("Welcome Typescript");
}

display(); */


//Named Function included parameter types and return type
/* function Sum(x:number,y:number):number //:number return type
{
    return x+y;
}

console.log(Sum(100,200)); */



//Anonymous  Function - no named function,  we store function in variable
/* var greeting = function()
{
    console.log("Welcome to Typescript");
}

greeting();
 */

//Anonymous  Function - included parameter types and return type

var Sum=function(x:number,y:number):number
{
    return x+y;
}

console.log(Sum(10,20));