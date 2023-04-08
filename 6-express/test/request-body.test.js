import express from "express";
import request from "supertest";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Di set false supaya tidak digabung dengan body

app.post("/json", (req, res) => {
  const name = req.body.name;
  res.json({ hello: `Hello, ${name} !` });
});

app.post("/form", (req, res) => {
  const name = req.body.name;
  res.json({ hello: `Hello, ${name} !` });
});

// Mengetes middleware json
test("test request body JSON", async () => {
  let response = await request(app)
    .post("/json")
    .set("Content-Type", "application/json")
    .send({ name: "Bondan" });
  expect(response.body).toEqual({ hello: `Hello, Bondan !` });
});

// Mengecek middleware form
test("test request body Form", async () => {
  let response = await request(app)
    .post("/form")
    .set("Content-Type", "application/x-www-form-urlencoded")
    .send("name=Bondan");
  expect(response.body).toEqual({ hello: `Hello, Bondan !` });
});
