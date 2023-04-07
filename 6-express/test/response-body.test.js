import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.set({ "Content-Type": "text/html" });
  res.send(`<strong>Hello, World !</strong>`);
});

test("test response body", async () => {
  const response = await request(app).get("/");
  expect(response.get("Content-Type")).toContain("text/html");
  expect(response.text).toBe("<strong>Hello, World !</strong>");
});
