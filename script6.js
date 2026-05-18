//Student Attendance System//
let presentStudents = ["a", "b", "c"];
let absentStudents = ["d", "e"];
let allStudents = [...presentStudents, ...absentStudents];
allStudents.push("f");
// console.log("Present Students:", presentStudents);
// console.log("Absent Students:", absentStudents);
console.log("Final Student List:", allStudents);

// 2. E-Commerce Cart

let mobile = {
    brand: "apple",
    model: "i 17 pro max",
    price: 175000
};

let charger = {
    type: "Fast Charger",
    watt: "45W"
};

let cartItem = {
    ...mobile,
    ...charger
};

cartItem.deliveryDate = "20-May-2026";


console.log(cartItem);

//Function using rest operator//
function orderFood(...items) {

        console.log("Total items ordered:", items.length);

       console.log("First item:", items[0]);

        console.log("Last item:", items[items.length - 1]);
}


orderFood("Pizza", "hot chocolate", "Pasta", "Ice Cream" , "cake");

// salary filter//
let employees = [
    { name: "Arun", salary: 45000 },
    { name: "Priya", salary: 60000 },
    { name: "harini", salary: 75000 },
    { name: "Sneha", salary: 50000 }
];

let filteredEmployees = employees.filter(employee => employee.salary > 50000);

console.log(filteredEmployees);

// 5. Online Game Score Board//

let scores = [200, 150, 200, 250, 300];


let totalScore = scores.reduce((acc,c) => {
    return acc + c;
}, 0);
console.log("Total Score:", totalScore);