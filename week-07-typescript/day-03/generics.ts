function getFirstItem<T>(items:T[]):T | undefined{
    return items[0];
}

let firstNumber=getFirstItem([10,20,230]);
let firstName=getFirstItem(['Ahmed','Ali'])

//let age:number=firstNumber;

function identity<T>(value:T):T{
    return value;
}

let customer=identity({
    id:1,
    name:'Ahmed',
    email:'ahmed@gmail.com'
});

customer.name='Ali';
//customer.id='100';

function getEntityId<T extends{id:number}>(entity:T):number{
    return entity.id;
}

let productId=getEntityId({
    id:101,
    name:'laptop',
    price:50000
});

let orderId=getEntityId({
    id:202,
    total:1500
});

//let invalidId=getEntityId({
//    name:'Ahmed',
//    email:'ahmed@gmail.com'
//})