/* //1..break.10
for(var i:number=1;i<=10;i++)
{
    if(i==5) break; // 5 gelince donguden cık
    console.log(i); // 1 2 3 4
} */


 //1. continue..10
for(var i:number=1;i<=10;i++)
{
    if(i==5) continue; // 5 gelince skip
    console.log(i); // 1 2 3 4  6 7 8 9 10
}