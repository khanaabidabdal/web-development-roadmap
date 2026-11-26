import {calculateTotal,calculateDiscount} from "./calculator.js";
import formatPrice from "./formatter.js";
import type { Product,CartItem } from "./types.js";
import { calculateCartItemTotal } from "./cart.js";
import { getProduct, parseProductResponse } from "./api.js";

const total = calculateTotal(500, 3);
const discount = calculateDiscount(total, 10);
const finalPrice=total-discount;

console.log(formatPrice(total));
console.log(formatPrice(discount));
console.log(formatPrice(total - discount));

const product:Product={
    id:101,
    name:'TypeScript Handbook',
    price:800
};

const cartItem:CartItem={
    product:product,
    quantity:3
};

console.log(formatPrice(calculateCartItemTotal(cartItem)));

const response=getProduct(101);

if(response.status==='success'){
    console.log(response.data.name);
    console.log(formatPrice(response.data.price));
} else {
    console.log(response.message);
}

const validResponse = parseProductResponse({
    id: 201,
    name: "Mechanical Keyboard",
    price: 2500
});

const invalidResponse = parseProductResponse({
    id: 202,
    name: "Monitor",
    price: "15000"
});

console.log(validResponse);
console.log(invalidResponse);