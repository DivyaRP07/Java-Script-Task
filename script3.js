//looping statement using for loop//
for (let i = 1; i <= 20; i++) {     
    console.log(i);
}
//Print all odd numbers from 1 to 50.//
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }   
}
// Multiplication Table//
let n = 7;

for (let i = 1; i <= 5; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}
//Reverse Counting//
let f=1;
while (f <= 20) {       

    console.log(f);

    f++;
}
//sum of Numbers//
let sum = 0;
for (let b = 1; b <= 100; b++) {
  sum =sum+b;
}
console.log(sum);
// objects in array//

let fruits = ["apple", "banana", "orange", "grapes"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//count of even numbers//
let count = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        count++;
    }
}

console.log("Count of even numbers:", count);

// //Print this pattern using loops:
// *
// **
// ***
// ****
// *****//
for (let c = 1; c <= 5; c++) {
    let pattern = "";       
    for (let j = 1; j <= c; j++) {
        pattern =pattern + "*";
    }
    console.log(pattern);
}  
//function//
function greeting()   
{
    console.log("Welcome to JavaScript!");
}  
greeting();
//function with parameters//
function print(name) {
    console.log("Hello, " + name + "!");
}   
print("Diya");  
//print addition of 2 numbers//
function add(a, b) {
    return a + b;
}   

let result = add(10, 20);
console.log(result);
//add bonus to the salary//
function addBonus(salary, bonus) {
    return salary + bonus;
}
let totalSalary = addBonus(50000, 5000);
console.log(totalSalary);
//for in //
let student = {
    name: "Rahul",
    course: "JavaScript",
    marks: 95
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}
//largest number 
// 
function findLargest(l1, l2)

{

    if (l1 > l2) {
        return l1;
    } else if (l2 > l1) {
        return l2;
    } else {
        return "Both numbers are equal.";
    }   
}
    console.log("the largest number is: " + findLargest(70, 50));
  //salary bonus//
let employee = {
    name: "Rahul",
    department: "IT",
    salary: 50000
};

function addBonus(emp, bonus) {

    let totalSalary = emp.salary + bonus;

    console.log("Employee Name:", emp.name);
    console.log("Department:", emp.department);
    console.log("Salary:", emp.salary);
    console.log("Salary after bonus:", totalSalary);
}

addBonus(employee, 5000);
