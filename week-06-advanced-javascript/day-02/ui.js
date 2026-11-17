const productList=document.querySelector('#product-list')
const statusMessage=document.querySelector('#status-message');

export function showLoading(){
    productList.replaceChildren();
    statusMessage.textContent='Loading products...';
    statusMessage.classList.remove('error');
}

export function showError(message){
    productList.replaceChildren();
    statusMessage.textContent=message;
    statusMessage.classList.add('error');
}

export function showEmpty(){
    productList.replaceChildren();
    statusMessage.textContent='No products found';
    statusMessage.classList.remove('error');
}

export function renderProducts(products) {
    productList.replaceChildren();
    statusMessage.classList.remove("error");

    if (products.length === 0) {
        showEmpty();
        return;
    }

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

    statusMessage.textContent =
        `${products.length} products displayed.`;
}

const categoryFilter = document.querySelector("#category-filter");

export function renderCategories(products) {
    const categories = [
        ...new Set(products.map(product => product.category))
    ];

    categories.sort();

    categoryFilter.replaceChildren();

    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "All Categories";
    categoryFilter.append(allOption);

    for (const category of categories) {
        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        categoryFilter.append(option);
    }
}