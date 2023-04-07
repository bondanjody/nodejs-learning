import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  // redirect digunakan untuk berpindah ke halaman lain
  res.redirect("/to-next-page");
});

test("test response redirect", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(302);
  expect(response.get("Location")).toBe("/to-next-page");
});
