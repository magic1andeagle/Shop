import { makeAutoObservable } from "mobx";

class ItemState {
  items = [
    { id: 1, title: "Велосипед горный", price: 15000, initialPrice: 15000, quantity: 0 },
    { id: 2, title: "Электросамокат", price: 25000, initialPrice: 25000, quantity: 0 },
    { id: 3, title: "Самокат детский", price: 8000, initialPrice: 8000, quantity: 0 },
    { id: 4, title: "Самокат детский", price: 8000, initialPrice: 8000, quantity: 0 },
    { id: 5, title: "Самокат детский", price: 8000, initialPrice: 8000, quantity: 0 },
    { id: 6, title: "Самокат детский", price: 8000, initialPrice: 8000, quantity: 0 },
  ];

  cartItems = [];
  favouriteItems = [];
  totalCartValue = 0;
  finalItemPrice = 0;

  constructor() {
    makeAutoObservable(this);
  }

  /* Counter */

  changePrice(id) {
    const index = this.cartItems.findIndex((item) => item.id == id)
    this.cartItems[index].price *= this.cartItems[index].quantity
  }

  increment(id) {
    const index = this.cartItems.findIndex((item) => item.id == id)
    this.cartItems[index].quantity += 1
  }

  decrement(id) {
    const index = this.cartItems.findIndex((item) => item.id == id)

      this.cartItems[index].quantity -= 1
      if (this.cartItems[index].quantity == 0) {
        this.deleteFromCart(index)
        return
      }   
  }

  /* Cart */

  addToCart(id, price, initialPrice, quantity) {
    for (let item of this.cartItems) {
      if (item.id == id) {
        return;
      }
    }
    this.cartItems.push({ id, price, initialPrice, quantity });
    const index = this.cartItems.findIndex((item) => item.id == id)
    this.cartItems[index].quantity += 1
    console.log(this.cartItems);
  }

  deleteFromCart(index) {
    this.cartItems.splice(index, 1);
    console.log(this.cartItems);
    // this.cartItems = this.cartItems.filter((item) => item.id !== id);
  }

  setTotalCartValue() {
    let finalValue = 0;
    for (let item of this.cartItems) {
      finalValue += +item.price;
    }
    this.totalCartValue = finalValue;
    console.log(this.totalCartValue);
  }

  addToFavourite(id) {
    if (this.favouriteItems.includes(id)) {
      return;
    }
    this.favouriteItems.push(id);
  }

  deleteFromFavourites(id) {
    this.favouriteItems = this.favouriteItems.filter((item) => item !== id);
  }
}

export default new ItemState();
