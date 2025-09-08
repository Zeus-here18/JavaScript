// checking a number greater than another number

let num1 = 5;
let num2 = 8;

/*
console.log("I am regular upper code");
if (num1 > num2) {
  console.log("num 1 is greater");
} else {
  console.log("nope num1 is not greater");
}

console.log("I am bottom code");
*/
//Checking if a string is equal to another string:

let username = "chai";
let anotherUsername = "chai";

if (username == anotherUsername) {
  console.log("Pick another username");
} else {
  console.log("You can pick this username");
}

//Checking a variable is a number or not

let score = 44;

if (typeof score === "number") {
  console.log("Yep, this is a number");
} else {
  console.log("No that is not a number");
}

//check if a boolean value is  true ofr  false

let isTeaReady = false;
if (isTeaReady) {
  console.log("Tea is ready");
} else {
  console.log("tea is not ready.");
}

//checking if an array is empty or not

let items = ["item1"];

console.log(items.length);

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is not empty");
}
