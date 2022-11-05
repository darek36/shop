


const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');
const productsUl = document.querySelector('.products-list');

const addProductToShop = event => {
    event.preventDefault();

    const name = nameInput.value;
    const price = Number(priceInput.value);

    // console.log(event.target.elements['product-name'].value)

    const newLi = document.createElement('li');

    const newStrong = document.createElement('strong');
    newStrong.innerText = name;

    const newPriceText = document.createTextNode(` - ${price.toFixed(2)} zł.`);

    const newBtn = document.createElement('button');
    newBtn.classList.add('btn-buy-product');
    newBtn.dataset.name = name;
    newBtn.dataset.price = String(price);
    newBtn.innerText = 'Kup!';
    newBtn.addEventListener('click', addProductToBasket);

    newLi.appendChild(newStrong);
    newLi.appendChild(newPriceText);
    newLi.appendChild(newBtn);

    productsUl.appendChild(newLi);
};

addProductForm.addEventListener('submit', addProductToShop);















