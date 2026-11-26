function calculateTotal(price:number,quantity:number){
    return price * quantity;
}

let total1=calculateTotal(500,3);
let total2=calculateTotal(500,3);

function calculateDiscount(price:number,discountPercent:number):number{
    let discount=price*discountPercent/100;
    return discount;
}

let discountAmount=calculateDiscount(2000,10);

function logOrder(orderId:number): void{
    console.log('Order received: ',orderId);
}

logOrder(101);
let result=logOrder(102);
//let orderNumber:number=result;

function greetCustomer(name:string, message:string='Welcome'):string{
    return name + ": " +  message.toUpperCase();
}

let greeting1=greetCustomer('Ahmed','Welcome');
let greeting2=greetCustomer('Ali');

function calculateShipping(amount:number,shippingFee:number=100):number{
    return amount+shippingFee;
}

let order1=calculateShipping(1000);
let order2=calculateShipping(1000,50);

function calculateCartTotal(...prices:number[]):number{
    let total=0;

    for(const price of prices){
        total+=price;
    }

    return total;
}

let cart1=calculateCartTotal(500,1000,250);
let cart2=calculateCartTotal(200,300);
let cart3=calculateCartTotal();
let cart4=calculateCartTotal(500,1000);