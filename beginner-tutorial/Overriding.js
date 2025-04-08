//Overriding.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankCentral = /** @class */ (function () {
    function BankCentral() {
        this.rateofInterest = 0;
    }
    BankCentral.prototype.ReturofInvestment = function () {
        return this.rateofInterest;
    };
    return BankCentral;
}());
var bankX = /** @class */ (function (_super) {
    __extends(bankX, _super);
    function bankX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    bankX.prototype.ReturofInvestment = function () {
        return 10.5;
    };
    return bankX;
}(BankCentral));
var bankY = /** @class */ (function (_super) {
    __extends(bankY, _super);
    function bankY() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    bankY.prototype.ReturofInvestment = function () {
        return 12.5;
    };
    return bankY;
}(BankCentral));
var x = new bankX();
console.log(x.ReturofInvestment());
var y = new bankY();
console.log(y.ReturofInvestment());
