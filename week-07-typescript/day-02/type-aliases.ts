type PaymentStatus='pending' | 'paid' | 'failed';

type Payment={
    readonly id:number;
    amount:number;
    status:PaymentStatus;
    reference?:string;
};

let firstPayment:Payment={
    id:101,
    amount:1500,
    status:'pending'
};

firstPayment.status='paid';
firstPayment.reference='TXN12345';
//firstPayment.status='completed';

type Product={
    id:number;
    name:string;
    price:number;
};

type Inventory={
    quantity:number;
    warehouse:string;
};

type StockProduct=Product & Inventory;

let laptop:StockProduct={
    id:101,
    name:'Laptop',
    price:50000,
    quantity:20,
    warehouse:'Mumbai'
};

let keyboard:StockProduct={
    id:102,
    name:'keyboard',
    price:1500,
    warehouse: "Delhi",
    quantity:50
};