/*
var empID:number=101;
var empName:string="John";
var empSal:number=50000;
*/
//**Declare Tuple */
//var employee=[101,"John",50000] // TS type tanımlanmalıdır
/* var employee:[number,string,number]=[101,"John",50000];
console.log(employee); //Access all values in tuple */
//**Accessing Tuple */
/* console.log(employee[0]); //101
console.log(employee[1]); //John
console.log(employee[2]); //50000 */
//Add element in to tuple - push()
/* var employee:[number,string,number]=[101,"John",50000];
console.log("Original tuple:"+employee);
employee.push(102,"Ali",70000);
console.log("After adding new elements:"+employee); */
//Remove elements from tuple - pop()
//101,John,50000,102,Ali,70000
/* employee.pop(); // removing last element from tuple
console.log("After removed element:"+employee); //-70000 */
//Update existing elements in tuple
/* var student:[number,string]=[101,"Smith"];
student[1]="Scott";
console.log(student); //[101,"Scott"]; */
//Tuple Array - 1 Tuple can hold multiple arrays 
/* var student:[number,string][];
student = [[101,"smith"],[102,"scoot"],[103,"mary"]] */
//or
var student = [
    [101, "smith"],
    [102, "scoot"],
    [103, "mary"]
];
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
