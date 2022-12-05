


const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');
const productsUl = document.querySelector('.products-list');
const clearList = document.querySelector('.clearList');
const messageValidation = document.querySelector('.messageValidation');

const clearProductsList = () => {
    clearList.addEventListener('click',() => {
        localStorage.removeItem('shop-products');
        const newLi = document.querySelectorAll('.newLi');
        newLi.forEach((el) => el.remove());
        messageValidation.textContent = 'Messages for administration support:';
        messageValidation.classList.remove("text-red-800", "font-bold");
    })
}

const saveProductToLocalStorage = (name, price) => {

    const productsList = JSON.parse(localStorage.getItem('shop-products')) ?? [];
    console.log(price.toString().length)
    console.log(name.length)
    if (name.length > 28 || price.toString().length > 11) {
         productsList.unshift({name, price});
         messageValidation.textContent = 'You can use only 28 sign of name and 11 sign of price.';
         messageValidation.classList.add("text-red-800", "font-bold");
         nameInput.value = '';
         priceInput.value = '';
         // localStorage.removeItem('shop-products')
    }else {
        messageValidation.textContent = 'Messages for administration support:';
        messageValidation.classList.remove("text-red-800", "font-bold");
        productsList.push({name, price});
        localStorage.setItem('shop-products', JSON.stringify(productsList));
        nameInput.value = '';
        priceInput.value = '';
    }
    // productsList.push({name, price});
    // localStorage.setItem('shop-products', JSON.stringify(productsList));

};

const loadProductsFromLocalStorage = () => {
    const productsList = JSON.parse(localStorage.getItem('shop-products')) ?? [];

    for (const {name, price} of productsList) {
        addProductToShop(name, price);
    }
};

const addProductToShop = (name, price) => {


    const newLi = document.createElement('li');
    newLi.classList.add("newLi","flex","justify-between", "items-center","p-2","md:py-4","mb-2", "border", "border-2", "border-gray-800", "bg-zinc-100", "2xl:bg-blue-100", "2xl:hover:bg-blue-50"); // PRACUJEMY NAD WRAPEM I WALIDACJĄ. ,"truncate" ucina za długie nazwy ale zrobie to jednak walidacją, tak żeby przycisk zajmował max 2 wiersze. Nie wiem dlaczego cena nie idzie dalej jak nazwa??? fajnie że się zatrzymuje ale dlaczego ??? też to zwaliduje odpowiednio

    const divNamePrice = document.createElement('div');
    divNamePrice.classList.add("flex","text-sm", "md:text-xl", "items-center", "flex-wrap", "min-[900px]:text-3xl", "lg:text-xl");

    const pName = document.createElement('p');
    pName.innerText = name;
    pName.classList.add( "font-bold", "break-all");

    const pPrice = document.createElement('p');
    pPrice.classList.add("px-2");
    const newPriceText = document.createTextNode(` - ${price.toFixed(2)} \u20ac.`);
    pPrice.appendChild(newPriceText);

    divNamePrice.appendChild(pName);
    divNamePrice.appendChild(pPrice);

    const newBtn = document.createElement('button');
    newBtn.classList.add( 'btn-buy-product',"flex", "bg-blue-500", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4","h-4/5", "rounded", "md:text-xl", "min-[900px]:text-3xl", "lg:text-xl");
    newBtn.dataset.name = name;
    newBtn.dataset.price = String(price);
    newBtn.innerText = 'Buy!';
    // newBtn.classList.add("bg-blue-500", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4","ml-5", "rounded");
    newBtn.addEventListener('click', addProductToBasket);

    newLi.appendChild(divNamePrice);
    // newLi.appendChild(pPrice);
    newLi.appendChild(newBtn);

    const messageValidation = document.querySelector('.messageValidation');



    // console.log(newPriceText)
    // const messageValidation = document.querySelector('.messageValidation');
    if (name.length > 28 || price.toString().length > 11) {
        // alert('You can use 20 sign max!!!')
        nameInput.value = '';
        priceInput.value = '';

    }else {
        productsUl.appendChild(newLi);

    }
    //  productsUl.appendChild(newLi);

}

const handleAddProductTFormSubmit= event => {
    event.preventDefault();

    const nameFromInput = nameInput.value;
    const priceFromInput = Number(priceInput.value);

    const productsList = JSON.parse(localStorage.getItem('shop-products')) ?? [];
    localStorage.setItem('shop-products', JSON.stringify(productsList));


    addProductToShop(nameFromInput, priceFromInput);
    saveProductToLocalStorage(nameFromInput, priceFromInput);


};

addProductForm.addEventListener('submit', handleAddProductTFormSubmit);
clearProductsList();
loadProductsFromLocalStorage();














