var StudentA = /** @class */ (function () {
    function StudentA(rollnumber, name, courseName) {
        this.rollnumber = rollnumber;
        this.name = name;
        // this.courseName=courseName;
    }
    StudentA.prototype.display = function () {
        console.log(this);
        // console.log(this.courseName); // can not access static with this
        console.log(StudentA.courseName); //can access with class name
    };
    StudentA.printA = function () {
        console.log("printA() function called");
        console.log(this.courseName);
    };
    return StudentA;
}());
var ss1 = new StudentA(1, 'datta', 'dotnet');
StudentA.courseName = "Dot net";
ss1.display();
// ss1.printA(); 
StudentA.printA(); // static members can be accessed by class name
