export function createInventory(initialStock=0){
    if(!Number.isInteger(initialStock)||initialStock<0){
        throw new Error(
            'Initial stock must be a non-negative integer.'
        );
    }

    let stock=initialStock;

    return{
        addStock(quantity){
            if(!Number.isInteger(quantity)||quantity<=0){
                throw new Error(
                    'Quantity must be a positive integer.'
                );
            }

            stock+=quantity;
            return stock;
        },

        sell(quantity){
            if(!Number.isInteger(quantity)||quantity<=0){
                throw new Error(
                    'Quantity must be a positive integer'
                );
            }

            if(quantity>stock){
                throw new Error("Insufficient stock");
            }

            stock-=quantity;
            return stock;
        },

        getStock(){
            return stock;
        }
    };
}