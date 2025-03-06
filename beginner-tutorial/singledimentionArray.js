//Array declaration and initialization
var fruits1 = ["mango", "apple", "banana"]; //declare + initialization
//or
var fruits2; //declare
fruits2 = ["mango", "apple", "banana"]; //initilization
console.log(fruits1);
console.log(fruits2);
//**Multi Type Array */
var values1 = ["mango", 100, "orange", 200];
//or
var values2 = ["banana", 100, "apple", 200];
console.log(values1);
console.log(values2);
//**Access Array Elements - using index number*/
var fruits = ["Apple", "Orange", "Banana"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); // undefined
//**Access Array Elements - using for loop*/
console.log("reading elements with **for** loop...........");
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//**Access Array Elements - using in operator*/
console.log("reading elements with **in** operator...........");
for (var j in fruits) {
    console.log(fruits[j]);
}
