//string

let string = "Hello";
let oldgreet = string + " " + "Atanu!";
console.log(oldgreet);

let demoOne = `Value is ${2 * 2}`;
console.log(demoOne);

// Number

let balance = 120;

console.log(balance); // balance er age jodi typeof likhtam tahole balance variable kon type er seta bolto

let anotherBalance = new Number(120); // ekta notun object create holo new number diye
console.log(anotherBalance);
// ekhane output e dekhabe [Number: 120] ekhane eta ekta object wrapper jar value 120

console.log(anotherBalance.valueOf()); //eta valueOf function use korar jonno sudhu number dekhabe
