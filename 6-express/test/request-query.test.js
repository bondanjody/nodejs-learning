import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello ${req.query.firstname} ${req.query.lastname} !`);
});

test("test request query", async () => {
  const response = await request(app)
    .get("/")
    .query({ firstname: "Bondan", lastname: "Jody" });
  expect(response.text).toBe("Hello Bondan Jody !");
});
