/* function add(a:number,b:number):number // add function with 2 parameter as number, return 1 number parameter
function add(a:string,b:string):string // add function with 2 parameter as string, return 1 string parameter

function add(a:any,b:any):any
{
    return a+b;
}

console.log(add(100,200));
console.log(add("Welcome ","Ali")); */
//Function overloading with different number or parameters
function display(a, b) {
    console.log(a + b);
}
function display(a) {
    console.log(a + b);
}
