import { makeAutoObservable } from "mobx"

class CartState {
    cartItems = []
    totalValue = 0

    constructor() {
        makeAutoObservable(this)
    }

    addToCart(data) {
        if (this.cartItems.find(item => item.id == data.id)) {
            alert('Вы уже добавили данный товар')
            return
        }
        this.cartItems.push(data)
        this.cartItems.find((item) => item.id == data.id).quantity += 1
        // this.cartItems[data.id - 1][1].quantity += 1
    }

    removeFromCart(id, data) {
        let index = this.cartItems.findIndex((item) => item.id == data[id - 1][1].id)
        this.cartItems.find((item) => item.id == id).quantity -= 1
        this.cartItems.splice(index, 1)
    }

    removeAllCart() {
        this.cartItems = []
        this.totalValue = 0
    }

    incrQuantity(id) {
        this.cartItems.find((item) => item.id == id).quantity += 1
    }

    decrQuantity(id) {
        this.cartItems.find((item) => item.id == id).quantity -= 1
    }

}

export default new CartState()