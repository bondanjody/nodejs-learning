import express from "express";
import request from "supertest";

// Middleware untuk melakukan kode sesuatu
const logger = (req, res, next) => {
  console.log(`Receive request: ${req.method} ${req.originalUrl}`);
  next();
};

// Middleware untuk memanipulasi respons
function addPoweredHeader(req, res, next) {
  res.set("X-Powered-By", "Google Inc");
  next();
}

// Middleware untuk melakukan validasi
function apiKeyMiddleware(req, res, next) {
  if (req.query.apiKey) {
    next();
  } else {
    res.status(401).end();
  }
}

// Middleware untuk memanipulasi data request
function requestTimeMiddleware(req, res, next) {
  req.requestTime = Date.now();
  next();
}

const app = express();

// Pemanggilan middleware
app.use(logger);
app.use(apiKeyMiddleware);
app.use(addPoweredHeader);
app.use(requestTimeMiddleware);

// routing
app.get("/", (req, res) => {
  res.send(`Hello Response !`);
});

app.get("/about", (req, res) => {
  res.send(`About Page`);
});

app.get("/time", (req, res) => {
  res.send(`Hello, Today is : ${req.requestTime} !`);
});

// testing
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

test("test response middleware time", async () => {
  const response = await request(app).get("/time").query({ apiKey: "35b" });
  expect(response.get("X-Powered-By")).toBe("Google Inc");
  expect(response.text).toContain("Hello, Today is : ");
});
