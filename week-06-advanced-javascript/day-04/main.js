import { createBasket } from "./basket.js";
import { basketReducer } from "./reducer.js";
import { createStore } from "./store.js";

const store = createStore(
    basketReducer,
    createBasket()
);

// Subscribe to state changes
const unsubscribe = store.subscribe(state => {
    console.log("Basket updated:", state);
});

console.log("Initial state:", store.getState());

// Add a book
store.dispatch({
    type: "ADD_ITEM",
    payload: {
        id: 1,
        name: "JavaScript Book",
        price: 250
    }
});

// Add honey
store.dispatch({
    type: "ADD_ITEM",
    payload: {
        id: 2,
        name: "Honey",
        price: 450
    }
});

// Update book quantity
store.dispatch({
    type: "UPDATE_QUANTITY",
    payload: {
        productId: 1,
        quantity: 3
    }
});

// Stop receiving notifications
unsubscribe();

// Remove honey
store.dispatch({
    type: "REMOVE_ITEM",
    payload: {
        productId: 2
    }
});

console.log("Final state:", store.getState());