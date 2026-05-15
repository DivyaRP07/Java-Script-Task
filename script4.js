//welcome name function//
function welcomeUser(name) {
    console.log("Welcome " + name);
}

welcomeUser("Daisy");
//
function squareNumber(num) {
    return num * num;
}

let result = squareNumber(7);

console.log(result);
//
let employee = {
    name: "Daisy",
    salary: 50000
};

function employeeBonus(bonus) {

    let totalSalary = employee.salary + bonus;

    console.log("Employee Name:", employee.name);
    console.log("Salary:", employee.salary);
    console.log("Salary after Bonus:", totalSalary);
}

employeeBonus(5000);
//
function checkScope() {

    if (true) {

        var a = 30;
        let b = 40;
        const c = 50;

        console.log("Inside block:");
        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log("Outside block:");
    console.log(a);
    // //console.log(b); 
    // console.log(c);
    // b is not defined
    // at checkScope (script4.js:48:17)
    // at script4.js:54:1//

    
}

checkScope();
//
var add = (a, b) => {
    console.log(a + b);
};

add(50, 20);
//call back function//

function multiply(a, b) {
    console.log(a * b);
}

function calculator(callback, num1, num2) {
    callback(num1, num2);
}

calculator(multiply, 11, 9);
//generator function//
function* offers() {

    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

let offer = offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
//default parameters//
function student(name, course = "JavaScript") {
    console.log("Name:", name);
    console.log("Course:", course);
}

student("daisy");
student("daisy", "Python");
//currying//
function multiply(a) {

    return function(b) {
        return function(c) {
        return a * b * c;
    };

}
}
console.log(multiply(7)(15)(3));
//Spread Operator//
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = [...arr1, ...arr2];

console.log(mergedArray);
//Object Spread//
let obj1 = { name: "Daisy", age: 25 };
let obj2 = { city: "New York", country: "USA" };

let mergedObject = { ...obj1, ...obj2 };

console.log(mergedObject);
//Rest Operator//
function numbers(...num) {

    console.log("Numbers:", num);

    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }

    console.log("Total Sum:", sum);
}

numbers(1,2,3,4,5,6);
//
let students = [];
function addStudent(name, marks) {

    let student = {
        name: name,
        marks: marks
    };
students = [...students, student];
}
function printStudents() {

    console.log("Student List:");

    for (let student of students) {
        console.log(student);
    }
}
function calculateMarks(callback) {
    callback();
}
function totalMarks() {

    let total = 0;

    for (let student of students) {
        total += student.marks;
    }

    console.log("Total Marks:", total);
}
function addBonusMarks(bonus) {

    students = students.map(student => ({
        ...student,
        marks: student.marks + bonus
    }));

    console.log("Bonus marks added");
}
function addMultipleStudents(...studentData) {
 students = [...students, ...studentData];
 }

 addStudent("ram", 70);
addStudent("payal", 80);
addMultipleStudents(
    { name: "keerthi", marks: 85 },
    { name: "priya", marks: 90 }
);
printStudents();

calculateMarks(totalMarks);

addBonusMarks(5);


printStudents();