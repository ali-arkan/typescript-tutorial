"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myclass = exports.myFunc = exports.x = void 0;
//test1.ts
exports.x = "Welcome"; // global variable
//simple function, global
function myFunc() {
    console.log("This is my function...");
}
exports.myFunc = myFunc;
//global class
var myclass = /** @class */ (function () {
    function myclass(a, b) {
        var _this = this;
        this.add = function () {
            return (_this.a + _this.b);
        };
        this.a = a;
        this.b = b;
    }
    return myclass;
}());
exports.myclass = myclass;
