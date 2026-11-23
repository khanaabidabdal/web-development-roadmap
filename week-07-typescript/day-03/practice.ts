interface PricedItem{
    id:number;
    price:number
}

function updatePrice<T extends PricedItem>(item:T,newPrice:number){
    return {...item,price:newPrice}
};

let book={
    id:1,
    title:'TypeScript Handbook',
    price:800
};

let updatedBook=updatePrice(book,1000);

console.log(book.price);
console.log(updatedBook.price);
console.log(updatedBook.title);


let laptop = {
    id: 2,
    brand: "Dell",
    price: 55000,
    warrantyYears: 2
};

let updatedLaptop = updatePrice(laptop, 50000);

console.log(laptop.price);
console.log(updatedLaptop.price);
console.log(updatedLaptop.brand);
console.log(updatedLaptop.warrantyYears);