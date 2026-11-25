import type { Product } from "./types.js";

export function isProduct(value:unknown):value is Product{
    return(
        typeof value==='object' &&
        value!==null &&
        'id' in value &&
        typeof value.id==='number' &&
        'name' in value &&
        typeof value.name==='string' &&
        'price' in value &&
        typeof value.price==='number'
    );
}
