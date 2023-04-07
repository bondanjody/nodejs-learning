import { getAllProducts, getProductbyId } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database.js"); // Menentukan module mana yang akan di mock

test("mock modules getProductbyId", () => {
  getProductbyId.mockImplementation((id) => {
    return { id, name: "Product Mock" };
  });

  const product = ProductService.findById(1);
  expect(product).toEqual({ id: 1, name: "Product Mock" });
});
