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

app.use(logger);
app.use(addPoweredHeader);

app.get("/", (req, res) => {
  res.send(`Hello Response !`);
});

app.get("/about", (req, res) => {
  res.send(`About Page`);
});

test("test response middleware 1", async () => {
  const response = await request(app).get("/");
  expect(response.get("X-Powered-By")).toBe("Google Inc");
});

test("test response middleware 2", async () => {
  const response = await request(app).get("/about");
  expect(response.get("X-Powered-By")).toBe("Google Inc");
});
