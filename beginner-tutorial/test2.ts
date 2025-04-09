//test2.ts



//access variable
import{x} from "./test1"
console.log(x);

//access function
import { myFunc } from "./test1";
myFunc();


//access class
import { myclass } from "./test1";
var cls=new myclass(10,20);
console.log(cls.add());


