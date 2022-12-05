


class Basket {
    constructor() {
        // this.totalValue = 0;

        // z localstorage
        // this.items = this.loadFromLocalStorage();
        // inaczej
        // const ls = this.loadFromLocalStorage()
        // this.items = ls ? ls : [];
        // lub
        // const ls = this.loadFromLocalStorage()
        // this.items = ls || [];
        // lub, czy wartość jest falsowa
        // this.items = this.loadFromLocalStorage() || [];
        // lub, czy wartość jest nulowa, nulisz operator
        this.items = this.loadFromLocalStorage() ?? [];



    }

    clear() {
        this.items.length = 0;
        this.saveToLocalStorage();

    }

    add(item) {
        this.items.push(item);
        this.saveToLocalStorage();
        // this.addTotalValue(item.price);

    }

    // addTotalValue(newPrice) {
    //     this.totalValue += newPrice;
    // }

    getTotalValue() {
        return this.items.reduce((prev, curr) => prev + curr.price, 0);
    }

    getBasketSummary() {

        return this.items
            .map((product, i) => {
                return {

                    id: i + 1,
                    textName: `${i + 1} - ${product.name}`,
                    textPrice:  ` - ${product.price.toFixed(2)} \u20ac`
                }
            });
    }

    remove(no) {
        this.items.splice(no - 1, 1);
        this.saveToLocalStorage();

    }

    saveToLocalStorage() {
        localStorage.setItem('basket-items', JSON.stringify(this.items));

    }

    loadFromLocalStorage() {
        // const itemJson = localStorage.getItem('basket-items');
        // if (itemJson === null) {
        //     return []; // jeśli nic nie ma w localstoragu
        // } else {
        //     return JSON.parse(itemJson);
        // }

        // inaczej, zmiana też w construktorze
        return JSON.parse(localStorage.getItem('basket-items')); // jeśli sparsujemy nulla to z powrotem dostaniemy nulla

    }


}

class Product {
    constructor(productName, productPrice) {
        this.name = productName;
        this.price = productPrice;
    }

    setNewPrice(newPrice) {
        this.price = newPrice;
    }
}

// const shopBasket = new Basket();
//
// const oranges = new Product('Pomarańcze Luz', 7.55);
// const cucumbers = new Product('Ogórek duży', 8.2);
//
// shopBasket.add(cucumbers);
// shopBasket.add(cucumbers);
// shopBasket.add(oranges);
//
//
// shopBasket.showBasket();
// console.log(shopBasket.getTotalValue());
// shopBasket.remove(2);
// // console.log(shopBasket)
// shopBasket.showBasket();
// console.log(shopBasket.getTotalValue());