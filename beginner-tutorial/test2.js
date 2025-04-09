"use strict";
//test2.ts
Object.defineProperty(exports, "__esModule", { value: true });
//access variable
var test1_1 = require("./test1");
console.log(test1_1.x);
//access function
var test1_2 = require("./test1");
(0, test1_2.myFunc)();
//access class
var test1_3 = require("./test1");
var cls = new test1_3.myclass(10, 20);
console.log(cls.add());
