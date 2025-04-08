class Person //Super Class
{
    name:String; //variable

    constructor(name:string) // method
    {
        this.name=name;
    }
}

class Employee extends Person
{
    empno: number;

    constructor(empno:number,name:string)
    {
        super(name); //super comes first
        this.empno=empno;  
    }

    displayData():void
    {
        console.log(this.empno);
        console.log(this.name);
    }
}


var emp= new Employee(101,"John");
emp.displayData();
