import { makeAutoObservable } from "mobx";

class SliderState {
  minPrice = 0;
  maxPrice = 1000;
  minRating = 1;
  maxRating = 5;

  constructor() {
    this.updatePrice = this.updatePrice.bind(this)
    this.updateRating = this.updateRating.bind(this)
    makeAutoObservable(this);
  }

  updatePrice(min, max) {
    this.minPrice = min
    this.maxPrice = max
  }

  updateRating(min, max) {
    this.minRating = min
    this.maxRating = max
  }

}

export default new SliderState();
