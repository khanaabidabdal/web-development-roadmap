import {
    addItem,
    removeItem,
    updateQuantity
} from "./basket.js";

export function basketReducer(state,action){
    switch(action.type){
        case 'ADD_ITEM':
            return addItem(state,action.payload);

        case 'REMOVE_ITEM':
            return removeItem(state,action.payload.productId);

        case 'UPDATE_QUANTITY':
            return updateQuantity(
                state,
                action.payload.productId,
                action.payload.quantity
            );
            default:
                return state;
    }
}