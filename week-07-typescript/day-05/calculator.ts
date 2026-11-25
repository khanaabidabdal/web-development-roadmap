export function calculateTotal(price: number, quantity: number): number {
    return price * quantity;
}

export function calculateDiscount(price: number, percentage: number): number {
    return price * percentage / 100;
}