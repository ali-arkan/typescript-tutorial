//test1.ts
export var x:string="Welcome" // global variable

//simple function, global
export function myFunc():void{
    console.log("This is my function...");
}

//global class
export class myclass 
{
    a:number;
    b:number;
    constructor(a:number,b:number)
    {
        this.a=a;
        this.b=b;
    }

    add=()=> // no need to specify return value in arrow function
    {
        return (this.a+this.b)
    }
}