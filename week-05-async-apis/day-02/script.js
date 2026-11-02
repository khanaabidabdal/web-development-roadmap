let products={
    id:101,
    name:'Wireless Keyboard',
    price:50,
    stock:8
}

//GetProduct
function getProduct(productId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (productId===products.id){
                resolve(products);
            } else {
                reject( new Error('Product not found'));
            }
        },1000);
    });
}

//CheckStock
function checkStock(product,quantity){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Number.isInteger(quantity) && quantity > 0 && quantity <= product.stock){
                resolve({product,quantity});
            } else{
                reject(new Error('Insufficient stock or Invalid Quantity'));
            }
        },1000);
    })
}

//CalculateTotal
function calculateTotal(product,quantity){
    return Promise.resolve(product.price * quantity);
}

getProduct(101)
    .then(product=>{
        console.log(`Found Prodcut: ${products.name}`);
        return checkStock(product,3);
    })
    .then(({product,quantity})=>{
        console.log(`Stock confirmed for ${quantity} items`);
        return calculateTotal(product,quantity);
    })
    .then(total=>{
        console.log(`Order total:$${total}`);
    })
    .catch(error=>{
        console.log("Order Failed:",error.message);
    });
