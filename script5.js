console.log("hello world");

let studentName = prompt("Enter Student Name:");
let department = prompt("Enter Department:");
let age = prompt("Enter Age:");


console.log(
    "Student Details\n" +
    "----------------\n" +
    "Name       : " + studentName + "\n" +
    "Department : " + department + "\n" +
    "Age        : " + age
);
//atm withdrawal//
let balance = 10000;

let amount = Number(prompt("Enter withdrawal amount:"));

if (amount >= 100 && amount <= balance) {

    console.log("Transaction Successful");

} else if (amount < 100) {

    console.log("Minimum withdrawal amount is 100");

} else {

    console.log("Insufficient Balance");
}

//Swiggy Discount Checker//\

let orderAmount = 750;

let result = (orderAmount > 499)
    ? "Free Delivery Available"
    : "Delivery Charges Applied";

console.log(result);
//instagram login//
let username = "admin";
let password = "1234";

let userInput = prompt("Enter Username:");

if (userInput == username) {

    let passInput = prompt("Enter Password:");

    if (passInput == password) {
        console.log("Login Success");
    } else {
        console.log("Wrong Password");
    }

} else {

    console.log("Invalid Username");
}
//Traffic Signal System//
let trafficLight = "yellow";
switch (trafficLight) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid traffic light color");
}
//EMPLOYEE BONUS CALCULATOR//
function salaryCalc(basicSalary, bonus) {

    let totalSalary = basicSalary + bonus;

    return totalSalary;
}

let res = salaryCalc(25000, 5000);

console.log(res);
//E-Commerce Cart Total//
// function calculateTotal(cartItems) {

//     let total = 0;      
//     for (let item of cartItems) {
//         total += item.price * item.quantity;
//     }
//     return total;
// }
// let cart = [
//     { name: "Shirt", price: 500, quantity: 2 },
//     { name: "Jeans", price: 1200, quantity: 1 },
//     { name: "Shoes", price: 2000, quantity: 1 }
// ];      
// let totalAmount = calculateTotal(cart);
// console.log("Total Cart Amount:", totalAmount);

//E-Commerce Cart Total//
let prices = [100, 200, 300, 400];

let total = 0;


for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}


let average = total / prices.length;

console.log("Total Price:", total);
console.log("Average Price:", average);
//WHATSAPP contacts//
let contact = {
    name: "Abhi",
    phone: "9872345672",
    status: "Online"
};

//ticket booking
for (let key in contact) {
    console.log(key + " : " + contact[key]);
}
function payment() {
    console.log("Payment Successful");
}

function bookTicket(callback) {

    console.log("Ticket Booking Completed");

    
    callback();
}

bookTicket(payment);
// Food Delivery Time Tracker//
function* orderTracker() {

    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}

let order = orderTracker();

console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);