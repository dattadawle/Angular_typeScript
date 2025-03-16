var StudentA = /** @class */ (function () {
    function StudentA(rollnumber, name, courseName) {
        this.rollnumber = rollnumber;
        this.name = name;
        this.courseName = courseName;
    }
    StudentA.prototype.display = function () {
        console.log(this);
    };
    StudentA.prototype.printA = function () {
        console.log("printA() function called");
    };
    return StudentA;
}());
var ss1 = new StudentA(1, 'datta', 'dotnet');
