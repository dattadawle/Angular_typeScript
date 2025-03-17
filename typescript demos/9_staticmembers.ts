class StudentA{ // class can not be static, all class members can be static 
   
    rollnumber:number |undefined;
    name : string | undefined;
    static courseName : string | undefined;

     constructor (rollnumber : number, name : string,courseName : string)
     {
        this.rollnumber=rollnumber;
        this.name=name;
     // this.courseName=courseName;
     }

     display(){
        console.log(this);
       // console.log(this.courseName); // can not access static with this

       console.log(StudentA.courseName); //can access with class name
     }

     static printA(){
        console.log ("printA() function called");
        console.log(this.courseName);
     }
}

let ss1:StudentA=new StudentA(1,'datta','dotnet');

StudentA.courseName="Dot net";

ss1.display();
// ss1.printA(); 

StudentA.printA()// static members can be accessed by class name

