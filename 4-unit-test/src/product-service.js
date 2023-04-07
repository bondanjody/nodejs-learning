import { getAllProducts, getProductbyId } from "./database";

export class ProductService {
  static findById(id) {
    return getProductbyId(id);
  }
  static findAll() {
    return getAllProducts();
  }
}
