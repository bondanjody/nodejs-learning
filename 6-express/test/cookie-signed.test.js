import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser("CONTOH_SECRET_KEY"));
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.cookies["name"];
  res.send(`Hello ${name} !`);
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.cookie("login", name, { path: "/", signed: true }); // Signed mengamankan cookie di browser
  res.send(`Hello ${name} !`);
});

test("test cookie read", async () => {
  const response = await request(app).get("/").set("Cookie", "name=Bondan");
  expect(response.text).toBe("Hello Bondan !");
});

test("test cookie write", async () => {
  const response = await request(app).post("/login").send({ name: "Bondan" });
  expect(response.get("Set-Cookie").toString()).toContain("Bondan");
  expect(response.text).toBe("Hello Bondan !");
});
