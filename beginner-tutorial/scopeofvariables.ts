let y=100; // global variable

function someFn()
{
    if(true)
    {
        //var x = 100; // local variable
        let x = 100;
        console.log(x);
        console.log(y); // ok
    }
    console.log(x); // error
    console.log(y); // ok
}

console.log(x); // error
console.log(y); // ok