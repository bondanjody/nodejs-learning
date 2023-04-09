import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/contoh.txt"); // __dirname menunjukkan direktori file ini
});

test("test response send file", async () => {
  const response = await request(app).get("/");
  expect(response.text).toContain("Sample text");
});
