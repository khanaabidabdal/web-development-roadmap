
import { ValidationError } from "./errors.js";

export class ApiError extends Error {
    constructor(message, status = null) {
        super(message);
        this.name = "ApiError";
        this.status = status;
    }
}

export async function fetchProduct(productId,fetchFn=fetch) {
    if (!Number.isSafeInteger(productId) || productId <= 0) {
        throw new ValidationError(
            "Product ID must be a positive safe integer."
        );
    }

    let response;

    try {
        response = await fetchFn(
            `https://dummyjson.com/products/${productId}`
        );
    } catch (error) {
        throw new ApiError(
            "Unable to connect to the product API.",
        );
    }

    if (!response.ok) {
        throw new ApiError(
            `Product request failed with HTTP ${response.status}`,
            response.status
        );
    }

    let product;

    try {
        product = await response.json();
    } catch (error) {
        throw new ApiError("The API returned invalid JSON.");
    }

    if (
        product === null ||
        typeof product !== "object" ||
        Array.isArray(product) ||
        !Number.isSafeInteger(product.id) ||
        typeof product.title !== "string" ||
        !Number.isFinite(product.price)
    ) {
        throw new ApiError("Invalid product response structure.");
    }

    return product;
}
