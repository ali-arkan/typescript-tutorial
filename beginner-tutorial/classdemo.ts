class Employee
{
    //class or instance variables
  eid:number;
  ename:string;
  deptno:number;
  
  constructor(id:number,name:string,dno:number)
  {
    this.eid=id;
    this.ename=name;
    this.deptno=dno;
  }

  setData(id:number,name:string,dno:number):void // local variables
  {
    this.eid=id;
    this.ename=name;
    this.deptno=dno;
  }

  display():void
  {
    //console.log(eid) // we cannot access class variables withing method
    console.log(this.eid); //this represent class and we can access class variables
    console.log(this.ename);
    console.log(this.deptno);
  }
}


//*** Call the Metod
/* var emp1=new Employee(); //create an object

 //set variables
emp1.eid=101;
emp1.ename="John";
emp1.deptno=10; 


// call setData method
emp1.setData(101,"John",10);

//call method in Class
emp1.display();  */


//*** Call the Constuctor
var emp2=new Employee(101,"John",10); //set the initial values
emp2.display(); // display the values






