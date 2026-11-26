
export function requireElement<T extends Element>(
    selector: string,
    elementType: new () => T
): T {
    const element = document.querySelector(selector);

    if (!(element instanceof elementType)) {
        throw new Error(
            `Required element missing or invalid: ${selector}`
        );
    }

    return element;
}
