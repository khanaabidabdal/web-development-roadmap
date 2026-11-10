import {add,substract,multiply} from "./math.js";
import {add as sum} from "./math.js";
import formatCurrency from "./formatter.js";

console.log("main.js started")

console.log('Addistion: ',add(10,15));
console.log('Substraction: ',substract(10,15));
console.log('Multiplication: ',multiply(10,15));
console.log("Sum using alias: ",sum(20,10))

const productPrice=249.5;

console.log("Formatted price: ",formatCurrency(productPrice));