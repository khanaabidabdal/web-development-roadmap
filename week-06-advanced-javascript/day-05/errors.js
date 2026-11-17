export class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

export class InsufficientStockError extends Error {
    constructor(requested, available) {
        super(
            `Requested ${requested} units, but only ${available} available.`
        );

        this.name = "InsufficientStockError";
        this.requested = requested;
        this.available = available;
    }
}