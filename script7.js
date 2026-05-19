// 5. Student Rank System//

let marks = [450, 300, 700, 200, 900];
marks.sort((a, b) => b - a);
console.log("Sorted Marks:", marks);
let top3 = marks.slice(0, 3);
console.log("Top 3 Marks:", top3)

// 4. String Concept Task - Username Checker//
let str1=" Naveen Kumar ";
console.log("Original String:", str1);
str1=str1.trim();
str1=str1.toUpperCase();
console.log("String in Upper case:", str1);
let includevalue = str1.includes("KUMAR");
console.log("ans", includevalue);

//3. Date Concept Task - Digital Clock//

let currentTime = new Date();

let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

console.log(hours + " : " + minutes + " : " + seconds);

  //1. API Task - User Names Uppercase//
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {   
    let result = data.map(user => user.name.toUpperCase());
    console.log(result);
    });

    //2.API Task -  Expensive Products//
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    
    let result = data.filter(item => item.price > 100);

    console.log(result);

  });

