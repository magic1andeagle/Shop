import { makeAutoObservable } from "mobx";

class ItemState {
  initItems = [];
  categoryItems = [];
  priceRateRangedItems = [];
  searchedItems = [];
  displayType = 'card'

  constructor() {
    this.updateItems = this.updateItems.bind(this);
    this.setCategoryItems = this.setCategoryItems.bind(this);
    this.updatePriceRateRangedItems = this.updatePriceRateRangedItems.bind(this)
    this.updateSearchedItems = this.updateSearchedItems.bind(this)
    this.setDisplayType = this.setDisplayType.bind(this)
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

  setDisplayType(type) {
    this.displayType = type
  }
}

export default new ItemState();
