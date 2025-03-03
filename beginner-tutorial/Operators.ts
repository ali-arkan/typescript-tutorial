var x=10;
var y=20;


//***** Aritmetic operators

console.log(x+y); //30
console.log(y-x); //10
console.log(x*y); //200
console.log(x/y); //0.5
console.log(x%y);
console.log(5**2);


//******** Assignment Operators */
//x=x+1
x++; // post increment 11
//++x; // pre-increment operator 11
console.log(x);

//y=y-1
y-- // --;
console.log(y);

x=100;
y=50;

//x=x+y;
x+=y;
console.log(x); //x:150

console.log(x-=y); //x=x-y 100
console.log(x*=y); //x=x*y 5000
console.log(x/=y); //x=x/y 100
console.log(x%=y); //x=x%y 0


//******** Comparison Operators */
//always return boolen value, true/false
// <> <= >= !=

x= 10;
y=20;

console.log(x>y); // false
console.log(x<y); // true

console.log(x>=y); //false
console.log(x<=y); //true

console.log(x!=y); //true


//ternary operator
console.log(x<y?x:y); //10, x y den kucukse x yazdır degilse y yazdır
console.log(x>y?x:y); //20


//****Logical Operators */
// && || !

var a:boolean=true;
var b:boolean=false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // not a, false
console.log(!b); // not b, true
