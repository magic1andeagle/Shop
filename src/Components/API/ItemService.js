import axios from "axios";

export default class ItemService {
  static async getItems() {
    try {
      const response = await axios
        .get("https://fakestoreapi.com/products")
        .then(resp => resp.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  static async getCategories() {
    try {
      const response = await axios
        .get('https://fakestoreapi.com/products/categories')
        .then(response => response.data)
      return response
    }
    catch (error) {
      console.log(error)
    }
  }
}
