let products=[];
let selectedCategory='all';

export function setProducts(newProducts){
    products=[...newProducts];
}

export function getProducts(){
    return [...products];
}

export function setCategory(category){
    selectedCategory=category;
}

export function getCategory(){
    return selectedCategory;
}

export function getFilteredProducts(){
    if(selectedCategory==='all'){
        return [...products];
    }

    return products.filter(
        product=>product.category===selectedCategory
    );
}