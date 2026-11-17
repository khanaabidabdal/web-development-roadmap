import {
    ValidationError,
    InsufficientStockError
} from "./errors.js";

export function validateQuantity(quantity) {
    if (!Number.isSafeInteger(quantity) || quantity <= 0) {
        throw new ValidationError(
            "Quantity must be a positive safe integer."
        );
    }

    return quantity;
}

export function validatePrice(price) {
    if (!Number.isFinite(price) || price < 0) {
        throw new ValidationError(
            "Price must be a non-negative finite number."
        );
    }

    return price;
}

export function validateStock(quantity, availableStock) {
    validateQuantity(quantity);

    if (
        !Number.isSafeInteger(availableStock) ||
        availableStock < 0
    ) {
        throw new ValidationError(
            "Available stock must be a non-negative safe integer."
        );
    }

    if (quantity > availableStock) {
        throw new InsufficientStockError(
            quantity,
            availableStock
        );
    }

    return true;
}