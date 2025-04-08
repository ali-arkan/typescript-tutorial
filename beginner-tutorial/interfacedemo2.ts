//interfacedemo2.ts
interface I1
{
    a:number;
     b:number;
    sum():number;
}

interface I2 extends I1 // I2 contains I1, interface can extend another interface
{
    x:number;
    y:number;
    sub():number;
}

class C1 implements I2 // class C1 implement I2, a class implements interface
{
    a:number;
    b:number;
    x:number;
    y:number;

    sum():number
    {
       return (this.a+this.b);
    }

    sub():number
    {
        return (this.x-this.y);
    }

    constructor(a:number,b:number,x:number,y:number)
    {
        this.a=a;
        this.b=b;
        this.x=x;
        this.y=y;

    }
}


var c=new C1(100,200,300,50);
/*
c.a=100;
c.b=200;
c.x=300
c.y=50;
*/

console.log(c.sum()); //300
console.log(c.sub()); //50