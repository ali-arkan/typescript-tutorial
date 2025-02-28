//Number

var first:number=12.0;//decimal
var second:number=0xFF; //hexadecimal, 255
var third:number=0o377;//octal
var fourth:number=0b111001;//binary, 57

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

//String

var empName:string="John";
var empDept:string="IT";

console.log(empName);
console.log(empDept);


var str:string=empName +" works in "+empDept;
console.log(str);

//Boolean
var bolen:boolean=true;
console.log(bolen);


//void type
function hello():void
{
 console.log("This is welcome message");
}

//Null type: Null represents a variable whole values is not undefined
var num1:number=null;
num1=100;
console.log(num1);


//undefined
var num2:number=undefined;
num2=200;
console.log(num2);


//Any type
var val:any = "Hi";
val = 300; //ok
console.log(val);

val=false;
console.log(val);

function myfunction(x:any,y:any)
{
    console.log(x+y);
}

myfunction(200,400); //300
myfunction("Hi"," Welcome"); // Hi Welcome


