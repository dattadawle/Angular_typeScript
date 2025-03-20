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
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.printB = function () {
        console.log('B class printB() method');
    };
    return B;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    A.prototype.printI = function () {
        console.log('I printI() implemented');
    };
    A.prototype.getName = function () {
        return this.name;
    };
    return A;
}(B));
var ia = new A();
console.log("name : ".concat(ia.getName()));
ia.printI();
ia.printB();
var C = /** @class */ (function () {
    function C(name) {
        this.name = name;
    }
    return C;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D(name, city) {
        var _this = _super.call(this, name) || this; //mandetory to class case class ctor before initializing current class members
        _this.city = city;
        return _this;
    }
    return D;
}(C));
var d = new D('vivek', 'pune');
console.log(d);
//*************************************************************************************
var E = /** @class */ (function () {
    function E() {
        this.name = "";
        this.city = "";
    }
    Object.defineProperty(E.prototype, "Name", {
        // getName():string{
        //     return this.name;
        // }
        // setName(name:string){
        //       this.name=name;
        // }
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    return E;
}());
var e = new E();
e.Name = "datta";
console.log("name: ".concat(e.Name));
//***************************************************************************** */
// method overloading
var F = /** @class */ (function () {
    function F() {
    }
    F.prototype.print = function (num, s) {
        if (typeof num === "number" && typeof s === "undefined") {
            console.log("print(num : number) : ".concat(num));
        }
        else if (typeof num === "string" && typeof s === "undefined") {
            console.log("print(s : string):void : ".concat(num));
        }
        else if (typeof num === "number" && typeof s === "string") {
            console.log("print(num : number , s :string) : ".concat(s, " & ").concat(num));
        }
    };
    return F;
}());
var f = new F();
f.print(10);
f.print("datta");
f.print(10, "datta");
