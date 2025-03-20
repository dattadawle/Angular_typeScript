"use strict";
class Customer {
    constructor() {
        this.printB = () => {
            document.writeln(" printB= ()  function called");
        };
    }
    print() {
        console.log(`welcome to typescript!!!!!`);
    }
    printA() {
        document.writeln(" printA():void function called");
    }
    printC(num, fun) {
        document.writeln(`num input ${num} </br>`);
        fun();
    }
    //     printD(name:string,age:number){
    //         document.writeln(`name : ${name}, age : ${age}`);
    //     }
    // }
    //     printD(name:string,age?:number){    
    //         document.writeln(`name : ${name}, age : ${age}`);
    //     }
    // }
    printD(name, age = 19) {
        document.writeln(`name : ${name}, age : ${age ? age : 'unknown'} </br>`);
    }
    printE(numbers) {
        for (let num of numbers) {
            document.writeln(`${num}`);
        }
        document.writeln();
    }
}
let cust1 = new Customer();
cust1.print();
cust1.printA();
cust1.printB();
cust1.printC(10, () => { (``); });
cust1.printD('datta', 28);
cust1.printD('mohini');
cust1.printE([1, 2, 3, 4, 5, 6]);
//cust1.printE(10,20,30,40,50,60)  //Error
