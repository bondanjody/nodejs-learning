import express from "express";
import request from "supertest";

const app = express();
app.use(express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.send(`Hello Response !`);
});

test("test static file ", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello Response !");
});

test("test static file contoh.txt", async () => {
  const response = await request(app).get("/contoh.txt");
  expect(response.text).toContain("Sample text");
});
