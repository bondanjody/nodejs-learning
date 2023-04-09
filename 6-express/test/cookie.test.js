import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.cookies["name"];
  res.send(`Hello ${name} !`);
});

app.post("/login", (req, res) => {
  const name = req.body.name;
  res.cookie("login", name, { path: "/" }); // path menunjukkan mulai dari mana cookie diaplikasikan (misalnya disini dari root ke bawah)
  res.send(`Hello ${name} !`);
});

// Membaca cookie (cookie yang dikirim dari client)
test("test cookie read", async () => {
  const response = await request(app).get("/").set("Cookie", "name=Bondan");
  expect(response.text).toBe("Hello Bondan !");
});

// Menulis cookie
test("test cookie write", async () => {
  const response = await request(app).post("/login").send({ name: "Bondan" });
  expect(response.get("Set-Cookie").toString()).toBe("login=Bondan; Path=/");
  expect(response.text).toBe("Hello Bondan !");
});
