/*
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`.
Store the result in a variable named `teaOrder`.
*/

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("green tea");

// console.log(teaOrder);

/*
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function,create another functtion named `confirmedOrder` that returns a message like `"Order confirmed for chai"`.
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for chai`;
  }
  return confirmOrder();
}

let orderConfirmation = orderTea("chai");
//console.log(orderConfirmation);

/*
3. Write an arrow function name `calculateTotal` that takes two parameters: `price` and `quantity`.The function should reeturn the total cost by multiplying the `price` and `quantity`.
Store the result in a variable named `totalCost`.
*/

//const likhlam calculateTotal function ta ekta array function jetake "=>" diye bojhano hochche
const calculateTotal = (price, quantity) => {
  return price * quantity;
};

let totalcost = calculateTotal(499, 100);

console.log(totalcost);
