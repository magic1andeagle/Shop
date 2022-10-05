import { makeAutoObservable } from "mobx";

class ItemState {
  initItems = [];
  categoryItems = [];
  priceRateRangedItems = [];
  searchedItems = [];

  constructor() {
    this.updateItems = this.updateItems.bind(this);
    this.setCategoryItems = this.setCategoryItems.bind(this);
    this.updatePriceRateRangedItems = this.updatePriceRateRangedItems.bind(this)
    this.updateSearchedItems = this.updateSearchedItems.bind(this)
    makeAutoObservable(this);
  }

  updateItems(obj) {
    this.initItems = [...obj];
  }

  setCategoryItems(obj) {
    this.categoryItems = [...obj];
  }

  updatePriceRateRangedItems(obj) {
    this.priceRateRangedItems = [...obj]
  }

  updateSearchedItems(obj) {
    this.searchedItems = [...obj]
  }
}

export default new ItemState();
