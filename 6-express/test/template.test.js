import express from "express";
import request from "supertest";
import mustacheExpress from "mustache-express";

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "html"); // format file(html, dll)
app.engine("html", mustacheExpress());

app.get("/", (req, res) => {
  res.render("index", {
    title: "Bondan Web",
    text: "Hello, my name is Bondan !",
  });
});

test("test template engine mustache", async () => {
  const response = await request(app).get("/");
  console.log(response.text);
  expect(response.text).toContain("Bondan Web");
  expect(response.text).toContain("Hello, my name is Bondan !");
});
