interface Product{
    readonly id:number;
    name:string;
    price:number
}

type Inventory={
    quantity:number;
    warehouse:string
}

type ProductCategory='Books'| "Electronics" |'Clothing';

type StoreProduct=Product & Inventory & {
    category:ProductCategory;
    description?:string
};

let book:StoreProduct={
    id:1,
    name:"TypeScript Handbook",
    price:800,
    quantity:20,
    warehouse:'Mumbai',
    category:'Books'
};

let laptop:StoreProduct={
    id:2,
    name:'Dell Laptop',
    price:55000,
    quantity:5,
    warehouse:'Delhi',
    category:'Electronics'
}


//book.id=10;