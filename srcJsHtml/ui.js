

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
    for (const {id, textName, textPrice} of basket.getBasketSummary()) {

        const newLi = document.createElement('li');
        newLi.classList.add("flex","flex-col", "min-[360px]:flex-row", "min-[360px]:justify-between", "my-2", "p-2", "md:p-4", "border", "border-2", "border-black","break-all","min-[900px]:text-3xl", "lg:text-xl", "bg-zinc-100", "2xl:bg-blue-100", "2xl:hover:bg-blue-50");

        const pDelete = document.createElement('p');
        pDelete.innerText='Remove';
        pDelete.classList.add( "mr-4", "text-red-900","self-center");
        newLi.innerHTML = `${textName} <br>${textPrice}`;
        newLi.appendChild(pDelete);
        newLi.addEventListener('click', removeItem);
        newLi.dataset.id = id;
        basketUi.appendChild(newLi);
    }
    const basketTotalValue = basket.getTotalValue();
    buyAllBtn.innerText = `Place an order for the amount ${basketTotalValue.toFixed(2)} \u20ac.`;
    buyAllBtn.disabled = basketTotalValue === 0;
};

const buyAllProducts = () => {
    const basketTotalValue = basket.getTotalValue();
    const orderInformation = document.querySelector('.order-information');
    orderInformation.classList.add("flex","flex-col", "my-2", "p-2", "border", "border-2", "border-rose-500");
    orderInformation.textContent = `Value products purchased ${basketTotalValue.toFixed(2)} \u20ac.`;
    // alert(`Zakupiono produkty o wartości ${basketTotalValue.toFixed(2)} zł.`)
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