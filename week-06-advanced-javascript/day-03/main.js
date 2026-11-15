import { createInventory } from "./inventory.js";
import { createMinimumQuantityValidator  } from "./validators.js";
import { createCounterWithLet, createCounterWithVar } from "./closure-loops.js";

const bookInventory=createInventory(10);
const honeyInventory=createInventory(5);

console.log("Initial book stock: ",bookInventory.getStock());

bookInventory.addStock(5);
bookInventory.sell(3);

console.log('Final book stock: ',bookInventory.getStock());
console.log("Honey stock: ",honeyInventory.getStock());

const validateBookOrder = createMinimumQuantityValidator(1);
const validateWholesaleOrder = createMinimumQuantityValidator(10);

console.log("Book order (3):", validateBookOrder(3));
console.log("Wholesale order (3):", validateWholesaleOrder(3));
console.log("Wholesale order (15):", validateWholesaleOrder(15));

console.log("--- Closure Loop Tests ---");

const varCounters=createCounterWithVar();
const letCounters=createCounterWithLet();

console.log('Using var:');
varCounters.forEach(counter=>console.log(counter()));

console.log("Using let: ");
letCounters.forEach(counter=>console.log(counter()));