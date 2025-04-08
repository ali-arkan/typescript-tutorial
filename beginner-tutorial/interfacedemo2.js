var C1 = /** @class */ (function () {
    function C1(a, b, x, y) {
        this.a = a;
        this.b = b;
        this.x = x;
        this.y = y;
    }
    C1.prototype.sum = function () {
        return (this.a + this.b);
    };
    C1.prototype.sub = function () {
        return (this.x - this.y);
    };
    return C1;
}());
var c = new C1(100, 200, 300, 50);
/*
c.a=100;
c.b=200;
c.x=300
c.y=50;
*/
console.log(c.sum()); //300
console.log(c.sub()); //50
