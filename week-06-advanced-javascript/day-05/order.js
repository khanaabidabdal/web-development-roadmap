import {
    validateQuantity,
    validatePrice,
    validateStock
} from "./validators.js";

import { ValidationError } from "./errors.js";

export function processOrder(inventory,order){
    if(
        inventory===null||
        typeof inventory!=='object'||
        !Number.isSafeInteger(inventory.stock)||
        inventory.stock<0
    ){
        throw new ValidationError('Invalid inventory.');
    }

    if(order===null||typeof order!=='object'){
        throw new ValidationError('Invalid order.');
    }

    validateQuantity(order.quantity);
    validatePrice(order.price);
    validateStock(order.quantity,inventory.stock);

    const remainingStock=inventory.stock-order.quantity;
    const orderTotal=order.quantity*order.price;

    if(!Number.isFinite(orderTotal)){
        throw new ValidationError("Order total is too large.")
    }

    return{
        inventory:{
            ...inventory,
            stock:remainingStock
        },
        order:{
            quantity:order.quantity,
            price:order.price,
            total:orderTotal
        }
    };
}