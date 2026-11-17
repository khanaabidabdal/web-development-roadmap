import { fetchProducts } from "./api.js";

import {
    setProducts,
    setCategory,
    getFilteredProducts,
} from "./state.js";

import {
    showLoading,
    showError,
    renderProducts,
    renderCategories
} from "./ui.js";

const categoryFilter=document.getElementById('category-filter');

async function initializeApp(){
    showLoading();

    try{
        const products=await fetchProducts();

        setProducts(products);
        renderCategories(products);

        renderProducts(getFilteredProducts());
    } catch (error){
        showError('Unable to load products. Please try again later.');
        console.error('Product initialization failed: ',error);
    }
}

categoryFilter.addEventListener('change',()=>{
    setCategory(categoryFilter.value);

    renderProducts(getFilteredProducts());
});

initializeApp();