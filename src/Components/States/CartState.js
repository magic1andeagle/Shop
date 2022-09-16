import { makeAutoObservable } from "mobx";

class CartState {
  cartItems = [];
  totalValue = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(data) {
    if (this.cartItems.find((item) => item.id == data.id)) {
      alert("Вы уже добавили данный товар");
      return;
    }
    this.cartItems.push({ ...data, quantity: 1 });
  }

  removeFromCart(id) {
    this.cartItems = [...this.cartItems.filter((item) => item.id !== id)];
  }

  removeAllCart() {
    this.cartItems = [];
    this.totalValue = 0;
  }

  incrQuantity(id) {
    this.cartItems.find((item) => item.id == id).quantity += 1;
  }

  decrQuantity(id) {
    this.cartItems.find((item) => item.id == id).quantity -= 1;
  }
}

export default new CartState();
