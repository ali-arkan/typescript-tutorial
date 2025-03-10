/* function Greet(greeting:string,name:string):string
{
    return greeting+" "+name;
}

//console.log(Greet("Welcome","Ali")); //OK
console.log(Greet("Welcome")); //Compile Error: expect 2 arguments we passed 1 argument
//console.log(Greet("Welcome","Ali","Arkan")); //Compile Error, 3 arguments  */


//Optional Parameters
/* function Greet(greeting:string,name?:string):string
{
    return greeting+" "+name;
}

console.log(Greet("Welcome","Ali")); //OK
console.log(Greet("Welcome")); //Welcome undefined
//console.log(Greet("Welcome","Ali","Arkan")); //Compile Error, 3 arguments   */


//Default Parameters
/* function Greet(name:string,greeting:string="Hello"):string
{
    return greeting+" "+name;
}

console.log(Greet("Ali")); //OK, returns Hello Ali
console.log(Greet("Ali","Welcome")); //OK, returns Hello Ali
console.log(Greet("Arkan")); //OK, returns Arkan */


