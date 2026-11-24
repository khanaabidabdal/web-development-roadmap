
interface Product {
    id: number;
    name: string;
    price: number;
    discount?: number;
    manufacturer?: {
        name: string;
        country: string;
    };
}

interface SuccessResponse {
    status: "success";
    data: Product;
}

interface ErrorResponse {
    status: "error";
    message: string;
}

type ApiResponse = SuccessResponse | ErrorResponse;

const success: SuccessResponse = {
    status: "success",
    data: {
        id: 101,
        name: "Laptop",
        price: 50000,
        discount: 0
    }
};

const failure: ErrorResponse = {
    status: "error",
    message: "Product not found"
};

function displayProduct(response: ApiResponse): void {
    if (response.status === "success") {
        console.log(`Product: ${response.data.name}`);
        console.log(`Price: ${response.data.price}`);
        console.log(`Discount: ${response.data.discount ?? 10}`);
        console.log(`Manufacturer: ${response.data.manufacturer?.name ?? "Unknown"}`);
    } else {
        console.log(`Error: ${response.message}`);
    }
}

displayProduct(success);
displayProduct(failure);