import axios from "axios";

const result = []

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
}
