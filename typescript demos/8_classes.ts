class Student {
    rollNumber? :number;
    name :string | undefined;
    gender:string | undefined;
//  constructor (){
//     console.log('constructor called');
//  }
 constructor( rollNumber:number, name:string, gender:string){
 this.rollNumber=rollNumber;
 this.name=name;
 this.gender=gender;
 }
    display()
    {
    console.log(`roll number : ${this.rollNumber} , name : ${this.name}, gender : ${this.gender}`);
    }
}

let student1:Student = new Student(2,"avi","male");


let student2  = new Student(2,"datta","male");
// student2.rollNumber=1;
// student2.name= "avinash";
// student2.gender="male";

student2.display();


// Parameter property
class Customer {
 constructor(public name:string, public lastName:string){
     this.name=name;
     this.lastName=lastName;
 }
 display(){
    console.log(`firstname:${this.name},lastName: ${this.lastName}`);
 }
}

let customer1=new Customer("datta","Dawle");

customer1.display();