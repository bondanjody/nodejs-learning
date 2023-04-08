import express from "express";
import request from "supertest";

const app = express();

app.get("/products/:idProduct", (req, res) => {
  const productId = req.params.idProduct;
  res.send(`Product : ${productId}`);
});

app.get("/categories/:idCategory(\\d+)", (req, res) => {
  const categoryId = req.params.idCategory;
  res.send(`Category : ${categoryId}`);
});

test("test response route parameter", async () => {
  let response = await request(app).get("/products/product1");
  expect(response.text).toBe("Product : product1");

  response = await request(app).get("/products/product2");
  expect(response.text).toBe("Product : product2");

  response = await request(app).get("/categories/121");
  expect(response.text).toBe("Category : 121");

  response = await request(app).get("/categories/category1");
  expect(response.status).toBe(404);
});
