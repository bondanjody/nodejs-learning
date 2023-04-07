import express from "express";
import request from "supertest";

const logger = (req, res, next) => {
  console.log(`Receive request: ${req.method} ${req.originalUrl}`);
  next();
};

function addPoweredHeader(req, res, next) {
  res.set("X-Powered-By", "Google Inc");
  next();
}

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello Response !`);
});

test("test response", async () => {
  const response = await request(app).get("/");
  expect(response.text).toBe("Hello Response !");
});
