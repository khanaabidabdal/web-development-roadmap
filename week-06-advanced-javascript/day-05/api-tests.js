
import { fetchProduct, ApiError } from "./api.js";

async function expectApiError(testName, mockFetch, expectedStatus) {
    console.log(`--- ${testName} ---`);

    try {
        await fetchProduct(1, mockFetch);
        console.error("FAIL: Expected an ApiError.");
    } catch (error) {
        if (
            error instanceof ApiError &&
            error.status === expectedStatus
        ) {
            console.log("PASS:", error.message);
        } else {
            console.error("FAIL: Unexpected error:", error);
        }
    }
}

// Test 1: Network failure
const networkFailure = async () => {
    throw new TypeError("Failed to fetch");
};

// Test 2: HTTP 500
const serverFailure = async () => ({
    ok: false,
    status: 500
});

// Test 3: Invalid JSON
const invalidJson = async () => ({
    ok: true,
    status: 200,
    json: async () => {
        throw new SyntaxError("Invalid JSON");
    }
});

// Test 4: Invalid response structure
const invalidProduct = async () => ({
    ok: true,
    status: 200,
    json: async () => ({
        id: 1,
        title: 123,
        price: "250"
    })
});

export async function runFailureTests() {
    await expectApiError(
        "Network failure",
        networkFailure,
        null
    );

    await expectApiError(
        "HTTP 500",
        serverFailure,
        500
    );

    await expectApiError(
        "Invalid JSON",
        invalidJson,
        null
    );

    await expectApiError(
        "Invalid response structure",
        invalidProduct,
        null
    );
}
