

const buyBtns = [...document.querySelectorAll('[data-name]')];
const basketUi = document.querySelector('.basket-list');
const buyAllBtn = document.querySelector('.btn-buy-all');

const basket = new Basket();

const removeItem = (e) => {
    const id = Number(e.target.dataset.id);
    basket.remove(id);
    createBasketUi();
}


const createBasketUi = () => {
    basketUi.innerHTML = '';

    // const {id, text} = oneProductInfo;
    for (const {id, text} of basket.getBasketSummary()) {

        const newLi = document.createElement('li');
        newLi.innerHTML = text;
        newLi.addEventListener('click', removeItem);
        newLi.dataset.id = id;
        basketUi.appendChild(newLi);
    }

    const basketTotalValue = basket.getTotalValue();
    buyAllBtn.innerText = `Złóż zamówienie na kwotę ${basketTotalValue.toFixed(2)} zł.`;
    buyAllBtn.disabled = basketTotalValue === 0;
};

const buyAllProducts = () => {
    const basketTotalValue = basket.getTotalValue();
    alert(`Zakupiono produkty o wartości ${basketTotalValue.toFixed(2)} zł.`)
    basket.clear();
    createBasketUi();
};

function addProductToBasket(e) {
    const name = e.target.dataset.name;
    const price = Number(e.target.dataset.price);

    const newProduct = new Product(name, price);
    basket.add(newProduct);
    createBasketUi();
}
//  LI MUSI WYGLĄDAĆ JAK TE KTÓREW SĄ NA STAŁE, PRZEŚLEDZIĆ BUDOWĘ PROGRAMU !!!

for (const btn of buyBtns) {
    btn.addEventListener('click', addProductToBasket);
}

buyAllBtn.addEventListener('click', buyAllProducts);

// buyBtns.forEach(el => el.addEventListener('click', (e) => {
//     console.log(e.target.dataset.id)
// }))

createBasketUi();