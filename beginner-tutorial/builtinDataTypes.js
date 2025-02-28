//Number
var first = 12.0; //decimal
var second = 0xFF; //hexadecimal, 255
var third = 255; //octal
var fourth = 57; //binary, 57
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
//String
var empName = "John";
var empDept = "IT";
console.log(empName);
console.log(empDept);
var str = empName + " works in " + empDept;
console.log(str);
//Boolean
var bolen = true;
console.log(bolen);
//void type
function hello() {
    console.log("This is welcome message");
}
//Null type: Null represents a variable whole values is not undefined
var num1 = null;
num1 = 100;
console.log(num1);
//undefined
var num2 = undefined;
num2 = 200;
console.log(num2);
//Any type
var val = "Hi";
val = 300; //ok
console.log(val);
val = false;
console.log(val);
function myfunction(x, y) {
    console.log(x + y);
}
myfunction(200, 400); //300
myfunction("Hi", " Welcome"); // Hi Welcome
