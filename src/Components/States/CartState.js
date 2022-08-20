class CartState {
    cartItems = []

    addToCart(data) {
        if (this.cartItems.find(item => item.id == data.id)) {
            alert('Вы уже добавили данный товар')
            return
        }
        this.cartItems.push(data)
        console.log(this.cartItems)
    }

    removeFromCart(id) {
        this.cartItems.filter((item) => {
            return item.id !== id
        })
    }

    removeAllCart() {
        this.cartItems = []
    }
}

export default new CartState()