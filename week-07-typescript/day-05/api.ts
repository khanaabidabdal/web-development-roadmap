import type { Product,ApiResponse } from "./types.js";
import { isProduct } from "./validators.js";

export function getProduct(id:number):ApiResponse<Product>{
    if(id===101){
        return {
            status:'success',
            data:{
                id:101,
                name:'TypeScript Handbook',
                price:800
            }
        };
    }

    return {
        status:'error',
        message:'Product not found'
    };
}

export function parseProductResponse(
    data: unknown
): ApiResponse<Product> {
    if (isProduct(data)) {
        return {
            status: 'success',
            data,
        };
    }

    return {
        status: 'error',
        message: 'Invalid product data',
    };
}
