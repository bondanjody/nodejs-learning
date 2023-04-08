import express from "express";
import request from "supertest";

const app = express();

app
  .route("/products")
  .get((req, res) => {
    res.send("Get product.");
  })
  .post((req, res) => {
    res.send("Post product.");
  })
  .put((req, res) => {
    res.send("Put product.");
  });

test("test response route parameter", async () => {
  let response = await request(app).get("/products");
  expect(response.text).toBe("Get product.");

  response = await request(app).post("/products");
  expect(response.text).toBe("Post product.");

  response = await request(app).put("/products");
  expect(response.text).toBe("Put product.");
});
