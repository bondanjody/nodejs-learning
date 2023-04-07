import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.set({
    "X-Powered-By": "Bondan Expo",
    "X-Author": "Bondan Jody",
  });
  res.send("Hello response !");
});

test("test response", async () => {
  const response = await request(app).get("/");
  expect(response.get("X-Powered-By")).toBe("Bondan Expo");
  expect(response.get("X-Author")).toBe("Bondan Jody");
  expect(response.text).toBe("Hello response !");
});
