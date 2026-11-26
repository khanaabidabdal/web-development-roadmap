let productName:string='Laptop';
let price:number=50000;
let inStock:boolean=true;

console.log(productName);
console.log(price);
console.log(inStock);

let employeeName='Ahmed';
let salary=7000;
let isActive=true;

employeeName='Ali'
salary=7000;
isActive=false;

//salary='Eight Thousand';
salary=8000;

let paymentStatus='pending';
const paymentMethod='UPI';

paymentStatus='completed';

//Experiment 1
//paymentStatus=100;

//Expermient 2
//paymentMethod='card';

let orderStatus:'pending' | 'shipped' | 'delivered';

orderStatus='pending';
orderStatus='shipped';
//orderStatus='cancelled';

let deliveryStatus='pending';

deliveryStatus='shipped';
deliveryStatus='unknown';

let paymentStatusCode:'pending'| 'paid' = 'pending';

paymentStatusCode='paid';
//paymentStatusCode='failed';

let userInput:unknown='Ahmed';

userInput=5000;
//console.log(userInput.toUpperCase());

if(typeof userInput==='string'){
    console.log(userInput.toLocaleUpperCase());
} else {
    console.log('The value is not a string');
}

let bookPrices:number[]=[250,400,550];

bookPrices.push(600);
//bookPrices.push('Free');

let bookTitles=['Book A','Book B'];

bookTitles.push('Book C');
//bookTitles.push(100);

let product={
    name:'Laptop',
    price:50000,
    available:true
};

product.price=55000;
//product.price='Fifty Thousand';
//product.category='Electronics';

let customer :{
    name:string,
    age:number;
    isActive:boolean;
}={
    name:"Ahmed",
    age:25,
    isActive:true
};

customer.age=26;
customer.name='Ali';


let newCustomer: {
    name: string;
    age: number;
    phone?: string;
} = {
    name: "Ali",
    age: 30
};

newCustomer.phone = "9876543210";
//newCustomer.phone = 1234567890;


let supplier: {
    name: string;
    email?: string;
} = {
    name: "ABC Books"
};

console.log(supplier.email?.toUpperCase());

let trackingNumber:string|null=null;
trackingNumber='TRK12345';
//trackingNumber=12345;

//Build a typed book object

let storeBook:{
    id:number;
    title:string;
    price:number;
    inStock:boolean;
    language:'English'| 'Urdu' | 'Arabic' | 'French';
    isbn?:string;
    discount:number | null;
}={
    id:101,
    title:'Introduction to physics',
    price:450,
    inStock:true,
    language:'English',
    discount:null
};

storeBook.price=500;
storeBook.isbn="9781234567890"
storeBook.language='French';