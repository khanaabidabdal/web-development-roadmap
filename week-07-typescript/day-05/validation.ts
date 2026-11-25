import type { Product } from "./types.js";

const externalData:unknown={
    id:101,
    name:'Laptop',
    price:"50000"
};

const product=externalData as Product;

console.log(product.price);
console.log(typeof product.price);

export function isProduct(value:unknown):value is Product{
    return(
        typeof value==='object' &&
        value!==null &&
        'id' in value &&
        typeof value.id==='number' &&
        'name' in value &&
        typeof value.name==='string' &&
        'price' in value &&
        typeof value.price==='number'
    );
}

const validData:unknown={
    id:102,
    name:'Laptop',
    price:50000
};

if(isProduct(validData)){
    console.log(validData.name);
    console.log(validData.price+1000);
}else{
    console.log('Invalid product data');
}

if(isProduct(externalData)){
    console.log(externalData.price);
}else{
    console.log("Invalid product data")
}