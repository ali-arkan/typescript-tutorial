//interfacedemo.ts
interface IEmployee
{
    empName:string;
    empID:number;
    empSal:number;
    displayData:()=> void; // function property syntax: bir fonksiyon türünde bir property tanımıdır,no parameters taken, no return any value function
}

var emp:IEmployee= //variable using Interface: type of the emp is IEmployee
{
    empName:"John",
    empID:101,
    empSal:50000,
    displayData():void // method syntax, Interface veya Class içinde method
    {
        console.log(this.empName+" "+this.empID+" "+this.empSal)
    }
}

console.log(emp.empName);
console.log(emp.empID);
console.log(emp.empSal);

emp.displayData();