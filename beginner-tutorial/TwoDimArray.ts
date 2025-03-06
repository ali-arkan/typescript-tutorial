//**2 Dimentional Array - declare and initial*/

var myarray:number[][]=[[10,20],[30,40],[50,60]] //3 rows, 2 columns two brakets
console.log(myarray);


//**2 Dimentional Array - multi type Array*/
var myarray2:(string | number)[][]=[["apple",10],["banana",20]];
console.log(myarray2);

//**Access 2D array elements */
console.log(myarray2[0][0]);
console.log(myarray2[0][1]);
console.log(myarray2[1][0]);
console.log(myarray2[1][1]);

//**Access 2D array elements  -- using for loop*/
/* console.log("Reading 2D array elements  -- for loop ")
for(var i=0;i<myarray2.length;i++) // row number
{
    for(var j=0;j<myarray2[i].length;j++) // column number
    {
        console.log(myarray2[i][j]);
    }

} */

//**Access 2D array elements  -- using IN operator*/
console.log("Reading 2D array elements  -- using IN operator ")
for(var i in myarray2) // row number
{
    for(var j in myarray2[i]) // column number
    {
        console.log(myarray2[i][j]);
    }

}

