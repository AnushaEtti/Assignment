"use strict";
exports.__esModule = true;
exports.Bank = void 0;
var Bank = /** @class */ (function () {
    function Bank(acnbr) {
        this.accNbr = acnbr;
    }
    Bank.prototype.getBankInfo = function () {
        return "Banknbr:" + this.accNbr;
    };
    return Bank;
}());
exports.Bank = Bank;
var acc1 = new Bank(987654);
console.log(acc1.accNbr);
console.log(acc1.getBankInfo());
