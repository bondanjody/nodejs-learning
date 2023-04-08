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

function apiKeyMiddleware(req, res, next) {
  if (req.query.apiKey) {
    next();
  } else {
    res.status(401).end();
  }
}

const app = express();

app.use(logger);
app.use(apiKeyMiddleware);
app.use(addPoweredHeader);

app.get("/", (req, res) => {
  res.send(`Hello Response !`);
});

app.get("/about", (req, res) => {
  res.send(`About Page`);
});

test("test response middleware 1", async () => {
  const response = await request(app).get("/").query({ apiKey: "34a" });
  expect(response.get("X-Powered-By")).toBe("Google Inc");
});

test("test response middleware 2", async () => {
  const response = await request(app).get("/about").query({ apiKey: "35b" });
  expect(response.get("X-Powered-By")).toBe("Google Inc");
});
// NOTE : sekarang jika tidak ada query.apiKey maka akan error

test("test response middleware unauthorized", async () => {
  const response = await request(app).get("/about");
  expect(response.status).toBe(401);
});
