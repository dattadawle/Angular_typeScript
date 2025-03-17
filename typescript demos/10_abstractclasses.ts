
// cinema hall
abstract class CustomerA{
showsTimings(){
    console.log("*** All shows Timings ***");
}

//incomplete
// printTicket()
// {
//     console.log("what type of ticket should be printed here????");
// }
abstract printTicket():void ;
}

class SilverCustomerA extends CustomerA{

    printTicket(): void {
        console.log("Silver cuatomer ticket printed");
    }
}

class AdvancedSilverCustomerA extends SilverCustomerA{

    printTicket(): void {
        console.log('Advanced Silver customer ticket printed');
    }
}
//let cust1 :CustomerA=new CustomerA(); error while creating obj of abstract class

let cust1:CustomerA= new SilverCustomerA();
cust1.showsTimings();
cust1.printTicket();

let cust2: CustomerA= new AdvancedSilverCustomerA();
cust2.showsTimings();
cust2.printTicket();