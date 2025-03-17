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
// cinema hall
var CustomerA = /** @class */ (function () {
    function CustomerA() {
    }
    CustomerA.prototype.showsTimings = function () {
        console.log("*** All shows Timings ***");
    };
    return CustomerA;
}());
var SilverCustomerA = /** @class */ (function (_super) {
    __extends(SilverCustomerA, _super);
    function SilverCustomerA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SilverCustomerA.prototype.printTicket = function () {
        console.log("Silver cuatomer ticket printed");
    };
    return SilverCustomerA;
}(CustomerA));
var AdvancedSilverCustomerA = /** @class */ (function (_super) {
    __extends(AdvancedSilverCustomerA, _super);
    function AdvancedSilverCustomerA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdvancedSilverCustomerA.prototype.printTicket = function () {
        console.log('Advanced Silver customer ticket printed');
    };
    return AdvancedSilverCustomerA;
}(SilverCustomerA));
//let cust1 :CustomerA=new CustomerA(); error while creating obj of abstract class
var cust1 = new SilverCustomerA();
cust1.showsTimings();
cust1.printTicket();
var cust2 = new AdvancedSilverCustomerA();
cust2.showsTimings();
cust2.printTicket();
