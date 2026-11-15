export function createMinimumQuantityValidator(minimum){
    if(!Number.isInteger(minimum)||minimum<=0){
        throw new Error('Minimum must be a positive integer.');
    }

    return function validateQuantity(quantity){
        return Number.isInteger(quantity) && quantity>=minimum;
    };
}