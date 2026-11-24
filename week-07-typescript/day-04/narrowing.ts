function formatValue(value:string|number):string{
    if (typeof value==='string'){
        return value.toUpperCase();
    }

    return value.toFixed(2);
}

let result1=formatValue('typescript');
let result2=formatValue(1500);
let result3=formatValue(25.6789);

console.log(result1);
console.log(result2);
console.log(result3);

interface Book{
    title:string;
    author:string;
}

interface Laptop{
    title:string;
    brand:string;
}

function describeProduct(product:Book|Laptop):string{
    if('author' in product){
        return `${product.title} by ${product.author}`;
    }

    return `${product.title} manufactured by ${product.brand}`;
}

let book:Book={
    title:'Clean Code',
    author:'Robert C. Martin'
};

let laptop:Laptop={
    title:'Inspiron',
    brand:'Dell'
};

console.log(describeProduct(book));
console.log(describeProduct(laptop));