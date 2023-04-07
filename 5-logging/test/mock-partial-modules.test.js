import { getAllProducts } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database.js", () => {
  const originalModule = jest.requireActual("../src/database.js"); // Memanggil module aslinya

  return {
    __esModule: true,
    ...originalModule,
    getAllProducts: jest.fn(),
  };
});
