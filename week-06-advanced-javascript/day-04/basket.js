export function createBasket() {
    return {
        items: [],
        total: 0
    };
}

export function calculateTotal(items) {
    return items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
}

export function addItem(basket, product) {
    if (
        !Number.isSafeInteger(product.id) ||
        typeof product.name !== "string" ||
        product.name.trim() === "" ||
        !Number.isFinite(product.price) ||
        product.price < 0
    ) {
        throw new Error("Invalid product.");
    }

    const existingItem = basket.items.find(
        item => item.id === product.id
    );

    let updatedItems;

    if (existingItem) {
        updatedItems = basket.items.map(item =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
    } else {
        updatedItems = [
            ...basket.items,
            {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1
            }
        ];
    }

    return {
        ...basket,
        items: updatedItems,
        total: calculateTotal(updatedItems)
    };
}

export function removeItem(basket, productId) {
    const updatedItems = basket.items.filter(
        item => item.id !== productId
    );

    return {
        ...basket,
        items: updatedItems,
        total: calculateTotal(updatedItems)
    };
}

export function updateQuantity(basket, productId, quantity) {
    if (!Number.isSafeInteger(quantity) || quantity < 1) {
        throw new Error("Quantity must be a positive integer.");
    }

    const updatedItems = basket.items.map(item =>
        item.id === productId
            ? { ...item, quantity }
            : item
    );

    return {
        ...basket,
        items: updatedItems,
        total: calculateTotal(updatedItems)
    };
}