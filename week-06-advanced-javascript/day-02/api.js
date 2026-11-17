const API_URL="https://dummyjson.com/products?limit=10";

export async function fetchProducts() {
    const response=await fetch(API_URL);

    if(!response.ok){
        throw new Error(
            `HTTP ${response.status}: Unable to fetch products`
        );

        }
        const data=await response.json();

        if(!Array.isArray(data.products)){
            throw new Error("Invalid API response format");
    }
    return data.products;
}