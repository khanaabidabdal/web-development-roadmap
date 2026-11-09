const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const statusMessage = document.querySelector("#status-message");
const productList = document.querySelector("#product-list");
const categoryFilter=document.querySelector('#category-filter');
const sortSelect=document.querySelector('#sort-select');
const productDialog = document.querySelector("#product-dialog");
const productDetails = document.querySelector("#product-details");
const closeDialogButton = document.querySelector("#close-dialog");
let activeController=null;
let allProducts=[];
let selectedCategory='all';
let selectedSort='default';


async function loadProducts(searchTerm = "") {
    allProducts=[];
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
            : "https://dummyjson.com/products?limit=0";

        const response = await fetch(url,{
            signal:controller.signal
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        if (activeController!==controller||controller.signal.aborted){
            return;
        }

       allProducts=data.products;
       renderProducts();

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

        const detailsButton=document.createElement('button');

        detailsButton.type='button';
        detailsButton.textContent='View Details';

        detailsButton.addEventListener('click',()=>{
            showProductDetails(product);
        })
        card.append(image,title,price,detailsButton);
        productList.append(card);
    });
}

function showProductDetails(product){
    productDetails.replaceChildren();

    const heading=document.createElement('h2');
    heading.textContent=product.title;

    const description=document.createElement('p');
    description.textContent=product.description;

    const price=document.createElement('p');
    price.textContent=`Price: ${product.price.toFixed(2)}`;

    const rating=document.createElement('p');
    rating.textContent=`Rating: ${product.rating ?? 'Not rated'}`;

    const category=document.createElement('p');
    category.textContent=`Category: ${product.category}`;

    productDetails.append(
        heading,description,price,rating,category
    );
    productDialog.showModal();
}


function renderProducts(){
    const visibleProducts=getVisibleProducts();
    if(visibleProducts.length===0){
        productList.replaceChildren();
        statusMessage.textContent="No product found.";
        return;
    }

    displayProducts(visibleProducts);

    statusMessage.textContent=`${visibleProducts.length} products displayed`;
}

function getVisibleProducts(){
    let products= [...allProducts];

    if (selectedCategory!=='all'){
        products=products.filter(product=>
            product.category===selectedCategory
        )
    }

    if(selectedSort==='price-asc'){
        products.sort((a,b)=>a.price-b.price);
    } else if(selectedSort==='price-desc'){
        products.sort((a,b)=>b.price-a.price);
    }

    return products;
}
loadProducts();

searchForm.addEventListener("submit", event => {
    event.preventDefault();

    const searchTerm = searchInput.value.trim();

    selectedCategory = "all";
    categoryFilter.value = "all";

    loadProducts(searchTerm);
});
categoryFilter.addEventListener('change',()=>{
    selectedCategory=categoryFilter.value;
    renderProducts();
});

sortSelect.addEventListener('change',()=>{
    selectedSort=sortSelect.value;
    renderProducts();
})

closeDialogButton.addEventListener("click", () => {
    productDialog.close();
});