class StudentA{
    rollnumber:number |undefined;
    name : string | undefined;
    courseName : string | undefined;

     constructor (rollnumber : number, name : string,courseName : string)
     {
        this.rollnumber=rollnumber;
        this.name=name;
        this.courseName=courseName;
     }

     display(){
        console.log(this);
     }

     printA(){
        console.log ("printA() function called");

     }
}

let ss1:StudentA=new StudentA(1,'datta','dotnet');

