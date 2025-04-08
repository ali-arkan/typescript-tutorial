var emp = //type of the emp is IEmployee
 {
    empName: "John",
    empID: 101,
    empSal: 50000,
    displayData: function () {
        console.log(this.empName + " " + this.empID + " " + this.empSal);
    }
};
console.log(emp.empName);
console.log(emp.empID);
console.log(emp.empSal);
emp.displayData();
