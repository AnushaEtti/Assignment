"use strict";
exports.__esModule = true;
exports.p1 = void 0;
var Address = /** @class */ (function () {
    function Address(city) {
        this.pCity = city;
    }
    Address.prototype.getAddressInfo = function () {
        return "AddressCity:" + this.pCity;
    };
    return Address;
}());
var p1 = new Address('Hyderabad');
exports.p1 = p1;
console.log(p1.pCity);
console.log(p1.getAddressInfo());
