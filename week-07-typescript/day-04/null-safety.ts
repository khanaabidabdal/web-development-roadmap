function formatEmail(email:string|null|undefined):string{
    if(email===null||email===undefined){
        return 'Email not available';
    }
    return email.toLowerCase();
}

console.log(formatEmail("CUSTOMER@EXAMPLE.COM"));
console.log(formatEmail(null));
console.log(formatEmail(undefined));
console.log(formatEmail(""));

interface Product{
    name:string;
    discount?:number;
    manufacturer?:{
        name:string;
        country:string;
    };
}

let product:Product={
    name:'Laptop',
    discount:0
};

console.log(product.manufacturer?.country);
console.log(product.manufacturer?.country ?? "Unknown");
console.log(product.discount ?? 10);
console.log(product.discount || 10);