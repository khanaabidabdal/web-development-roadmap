export interface Product{
    id:number;
    name:string;
    price:number;
}

export interface CartItem{
    product:Product;
    quantity:number;
}

export interface SuccessResponse<T>{
    status:'success';
    data:T;
}

export interface ErrorResponse{
    status:'error';
    message:string;
}

export type ApiResponse<T>=SuccessResponse<T>|ErrorResponse;