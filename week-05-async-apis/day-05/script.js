const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const statusMessage = document.querySelector("#status-message");
const productList = document.querySelector("#product-list");
let activeController=null;

async function loadProducts(searchTerm = "") {
    if(activeController){
        activeController.abort();
    }

    const controller=new AbortController();
    activeController=controller;

    try {
        statusMessage.classList.remove("error");
        statusMessage.textContent = "Loading products...";
        productList.replaceChildren();

        const url = searchTerm
            ? `https://dummyjson.com/products/search?q=${encodeURIComponent(searchTerm)}`
            : "https://dummyjson.com/products";

        const response = await fetch(url,{
            signal:controller.signal
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        if (activeController!==controller || controller.signal.aborted){
            return;
        }
        const products = data.products;

        if (products.length === 0) {
            statusMessage.textContent = "No products found.";
            return;
        }

        displayProducts(products);
        statusMessage.textContent =
            `${products.length} products displayed.`;

    } catch (error) {
        if(error.name==='AbortError'){
            return;
        }

        if(activeController!==controller){
            return;
        }
        statusMessage.textContent =
            `Failed to load products: ${error.message}`;

        statusMessage.classList.add("error");
    } finally{
        if (activeController===controller){
            activeController=null;
        }
    }
}

function displayProducts(products) {
    productList.replaceChildren();

    products.forEach(product => {
        const card = document.createElement("article");
        card.classList.add("product-card");

        const image = document.createElement("img");
        image.src = product.thumbnail;
        image.alt = product.title;

        const title = document.createElement("h2");
        title.textContent = product.title;

        const price = document.createElement("p");
        price.textContent = `$${product.price.toFixed(2)}`;

        card.append(image, title, price);
        productList.append(card);
    });
}

searchForm.addEventListener("submit", event => {
    event.preventDefault();

    const searchTerm = searchInput.value.trim();
    loadProducts(searchTerm);
});

loadProducts();
