


class Basket {
    constructor() {
        this.items = [];
        this.totalValue = 0;
    }

    clear() {
        this.items.length = 0;
    }

    add(item) {
        this.items.push(item);
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
                    text: `${i + 1} - ${product.name} - ${product.price.toFixed(2)} zł`,
                }
            });
    }

    remove(no) {
        this.items.splice(no - 1, 1);
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