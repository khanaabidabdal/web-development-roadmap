import { ValidationError,
    InsufficientStockError
 } from "./errors.js";

import {
    validateQuantity,
    validatePrice,
    validateStock
 } from "./validators.js";

 import { processOrder } from "./order.js";

 import { fetchProduct,ApiError } from "./api.js";

 import { runFailureTests } from "./api-tests.js";

function runTest(testName,callback){
    console.log(`--- ${testName} ---`);

    try{
        const result=callback();
        console.log("Success: ",result);
    } catch (error) {
    if (error instanceof InsufficientStockError) {
        console.error("Stock Error:", error.message);
        console.log("Requested:", error.requested);
        console.log("Available:", error.available);
    } else if (error instanceof ValidationError) {
        console.error("Validation Error:", error.message);
    } else {
        console.error("Unexpected Error:", error);
        throw error;
    }
    } finally{
        console.log("Test completed.");
    }
}

runTest("Valid quantity ",()=>validateQuantity(3));
runTest("Negative quantity ",()=>validateQuantity(-5));
runTest("String quantity",()=>validateQuantity('3'));

runTest("Valid price",()=>validatePrice(250));
runTest("Invalid price", () => validatePrice(-100));
runTest("Sufficient stock", () => validateStock(3, 10));
runTest("Insufficient stock", () => validateStock(15, 10));

console.log("--- Order Processing Tests ---");

const initialInventory={
    productId:1,
    stock:10
};

const validOrder={
    quantity:3,
    price:250
};

const result=processOrder(initialInventory,validOrder);

console.log("Original stock:", initialInventory.stock);
console.log("Updated stock:", result.inventory.stock);
console.log("Order total:", result.order.total);

runTest("Insufficient stock order", () =>
    processOrder(initialInventory, {
        quantity: 15,
        price: 250
    })
);

runTest("Invalid quantity order", () =>
    processOrder(initialInventory, {
        quantity: -2,
        price: 250
    })
);

console.log(
    "Original inventory preserved:",
    initialInventory.stock === 10
);


async function runAsyncTest(testName, callback) {
    console.log(`--- ${testName} ---`);

    try {
        const result = await callback();

        console.log("Success:", {
            id: result.id,
            title: result.title,
            price: result.price
        });
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error("Validation Error:", error.message);
        } else if (error instanceof ApiError) {
            console.error("API Error:", error.message);
            console.log("HTTP status:", error.status);
        } else {
            console.error("Unexpected Error:", error);
            throw error;
        }
    } finally {
        console.log("Async test completed.");
    }
}

async function runApiTests() {
    await runAsyncTest(
        "Valid product request",
        () => fetchProduct(1)
    );

    await runAsyncTest(
        "Invalid product ID",
        () => fetchProduct(-5)
    );

    await runAsyncTest(
        "Missing product",
        () => fetchProduct(999999)
    );
}

runApiTests().catch(error => {
    console.error("API test suite failed:", error);
});

runFailureTests().catch(error=>{
    console.error('Failure test suite crashed:',error);
})