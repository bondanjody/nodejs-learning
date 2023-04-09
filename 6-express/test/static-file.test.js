import express from "express";
import request from "supertest";

const app = express();
// app.use(express.static(__dirname + "/static"));
app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.send(`Hello Response !`);
});

app.get("/contoh.txt", (req, res) => {
  res.send(`Hello Response !`);
});

test("test static file ", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello Response !");
});

// Ini akan masuk ke routing '/contoh.txt'
test("test static file contoh.txt", async () => {
  const response = await request(app).get("/contoh.txt");
  expect(response.text).toContain("Hello Response !");
});

// Ini akan masuk ke routing '/static/contoh.txt'  (yang didefinisikan pada middleware)
test("test static file /static/contoh.txt", async () => {
  const response = await request(app).get("/static/contoh.txt");
  expect(response.text).toContain("Sample text");
});
