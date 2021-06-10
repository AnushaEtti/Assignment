"use strict";
exports.__esModule = true;
var Customar = /** @class */ (function () {
    function Customar(name) {
        this.custName = name;
    }
    Customar.prototype.getCustomarInfo = function () {
        return "CustomarName:" + this.custName;
    };
    return Customar;
}());
var cust1 = new Customar('anusha');
console.log(cust1.custName);
console.log(cust1.getCustomarInfo());
