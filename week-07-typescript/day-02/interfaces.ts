interface Customer{
    readonly id:number;
    name:string;
    email:string;
    isActive:boolean;
    phone?:string;
}

let customer1:Customer={
    id:1,
    name:'Ahmed',
    email:'ahmed@gmail.com',
    isActive:true
};

let customer2: Customer={
    id:2,
    name:'Ali',
    email:'Ali@gmail.com',
    isActive:false
}

let customers:Customer[]=[customer1,customer2];

customers.push({
    id:3,
    name:'Omar',
    email:'Omar@gmail.com',
    isActive:true
});

customers.push({
    id:4,
    name: "Usman",
    email:'usman@gmail.com',
    isActive: true
});

customer1.phone='9876543210';
customer2.phone='1234567890';


customer1.name = "Abdullah";
customer1.email = "abdullah@example.com";
//customer1.id = 100;

interface User {
    readonly id:number;
    name:string;
    email:string;
}

interface Admin extends User{
    permissions:string[];
}

let admin:Admin={
    id:101,
    name:'Ahmed',
    email:'admin@gmail.com',
    permissions:['read','write','delete']
};

let secondAdmin:Admin={
    id:102,
    name:'Ali',
    email:'Ali@gmail.com',
    permissions:['read']
};