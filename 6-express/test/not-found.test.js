import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello Response !`);
});

app.use((req, res, next) => {
  res.status(404).send("404 Not Found Cok!");
});

test("test response", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello Response !");
});

// Tes error 404
test("test response", async () => {
  const response = await request(app).get("/halaman-ngawur");
  expect(response.text).toBe("404 Not Found Cok!");
});
