var mysting1 = "welcome";
var mystring = "Welcome to Typescript";
//****charAt(): get each character at specific point
//index start from zero
console.log(mystring.charAt(0)); //W
console.log(mystring.charAt(2)); //l
//****concat: concat two or more string
var str1 = "Welcome";
var str2 = "To Typescript";
var str3 = " and Protractor";
console.log(str1.concat(str2)); // returns "Welcome To Typescript"
console.log(str1.concat(str2).concat(str3)); // returns "Welcome To Typescript Protractor"
//***replace */ -- bir değeri diğeri ile değiştirmek için
var str = "TyScript Programming";
console.log(str.replace('i', 'X')); //replace all i keyword with X
console.log(str.replace('Type', 'Java')); //replace Type  with Java 
//**split */ -- split with delimeter (comma, space etc)
var fruits = "Apple Banana Orange";
console.log(fruits.split(' ')); //delimeter is space -- [ 'Apple', 'Banana', 'Orange' ]
console.log(fruits.split(' ', 2)); // 2 boşluk sayarak yazdır 
console.log(fruits.split(' ', 1)); // ilk boşluga kadar ayırarak yazdır
var vegies = "Broccoli,Lettuce,Clove";
console.log(vegies.split(',')); //delimeter is comma -- [ Broccoli,Lettuce,Clove ]
//substring -- start from to how many character
str = "Welcome";
/*
Welcome
0123456
*/
console.log(str.substring(0, 3)); //start from zero and get first 3 char, Wel
console.log(str.substring(2, 5)); //start from 2 and end with 5, lco
//toUpperCase () && toLowerCase()
str = "TypeScript Programming";
console.log(str.toLowerCase()); // Lower
console.log(str.toUpperCase()); // Upper
//trim(),trimEnd,trimStart  -- remove spaces
str = "   Welcome   ";
console.log(str.trim());
