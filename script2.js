console.log("hello world");
let a = 10;
console.log(a);

console.log("10" + 5);
console.log("hello" +" "+ "all");
console.log("TASK2-11.05.26")
console.log("10" + 5)
console.log(10 + true)
console.log(false + null)
console.log("Hello" + undefined)
console.log([1,2] + 5)
//implicit typecasting//
console.log("AGE: " + 25);
console.log(typeof ("AGE: " + 25));

console.log(typeof (null + true));

console.log(true + 10);
console.log(typeof (true + 10));

console.log([2, 2] + "5");
console.log(typeof (([2, 2]) + "5"));

console.log({name: "Diya"} + 10);
console.log(typeof ({name: "Diya"} + 10));
console.log(null + 5);
console.log(typeof (null + 5));
let x = "500";
let num = Number(x);

console.log(num);
console.log(typeof num);


let num1 = Number(true);

console.log(num1);
let num2 = Number(false);

console.log(num2);
let num3 = Number(null);

console.log(num3);

let num4 = Number("abc");

console.log(num4);
console.log(typeof num4);

let num5 = Number([100]);

console.log(num5);
console.log(typeof num5);
// boolean constructors//
console.log(Boolean(""));
console.log(Boolean("javascript")); 
console.log(Boolean(0)); 
console.log(Boolean(1));  
console.log(Boolean(null)); 
console.log(Boolean(undefined)); 
console.log(Boolean([])); 
console.log(Boolean({}));
//Student Pass or Fail//
let studentScore = 45;
if (studentScore >= 30) {
    console.log("Student has passed.");
} else {
    console.log("Student has failed.");
}
//Voting Eligibility//
let votingAge = 18;
if (votingAge >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}
//using prompt//
// let age1 = prompt("Enter your age:");

// age1 = Number(age1);

// if (age1 >= 18) {
//     console.log("Eligible for voting");
// } else {
//     console.log("Not eligible for voting");
// }//
//Greatest Number//
let numA = 50;
let numB = 60;
let numC = 45;  
if (numA > numB && numA > numC) {
    console.log("numA is the greatest number.");
} else if (numB > numA && numB > numC) {
    console.log("numB is the greatest number.");
}   else {
    console.log("numC is the greatest number.");
}
//using prompt//
// const n1 = parseFloat(prompt("Enter num 1:"));
// const n2 = parseFloat(prompt("Enter num 2:"));
// const n3 = parseFloat(prompt("Enter num 3:"));
// let largest;
// if (n1 >= n2 && n1 >= n3) {
//     largest = n1;
// } else if (n2 >= n1 && n2 >= n3) {
//     largest = n2;
// } else {
//     largest = n3;
// }
// console.log("Largest: " + largest);
//=====//

//Traffic Light System- SWITCH CASE//
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
let trafficLight1 = "pink";
switch (trafficLight1) {
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
//login system//
let username = "admin";
let password = "1234";
let userInput = prompt("Enter username:");
let passwordInput = prompt("Enter password:");

if (userInput == username) {

    if (passwordInput == password) {
        console.log("Login Success");
    } else {
        console.log("Invalid Login");
    }

} else {
    console.log("Invalid Login");
}
//Session Finder//
// let session  = 14;
let session=parseInt(prompt("Enter the hour (0-24):"));
if (session >= 1 && session <= 12) {
    console.log("Good Morning");
} else if (session > 12 && session <= 15) {
    console.log("Good Afternoon");
} else  if (session > 16 && session  <= 19) {
    console.log("Good Evening");
} else if (session > 20 && session <= 24) {
    console.log("Good Night");      
}
//Bonus Challenge //
console.log(true + true)
console.log("5" - 2)
console.log(null + 1)
console.log(undefined + 1)
console.log(Boolean(""));
console.log(Number(true))

