import type {CartItem} from "./types.js";

export function calculateCartItemTotal(item: CartItem): number {
    return item.product.price * item.quantity;
}