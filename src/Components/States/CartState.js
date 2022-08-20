import { makeAutoObservable } from "mobx"

class CartState {
    cartItems = []

    constructor() {
        makeAutoObservable(this)
    }

    addToCart(data) {
        if (this.cartItems.find(item => item.id == data.id)) {
            alert('Вы уже добавили данный товар')
            return
        }
        this.cartItems.push(data)
        console.log(this.cartItems)
    }

    removeFromCart(id) {
        let index = this.cartItems.findIndex((item) => item.id == id)
        this.cartItems.splice(index, 1)
        console.log(this.cartItems)
    }

    removeAllCart() {
        this.cartItems = []
    }
}

export default new CartState()