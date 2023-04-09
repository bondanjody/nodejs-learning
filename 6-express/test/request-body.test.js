import express from "express";
import request from "supertest";
import expressFileUpload from "express-fileupload"; // Menggunakan express-fileupload

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressFileUpload());
// Di set false supaya tidak digabung dengan body

app.post("/json", (req, res) => {
  const name = req.body.name;
  res.json({ hello: `Hello, ${name} !` });
});

// Menggunakan express file upload
app.post("/file", async (req, res) => {
  const textFile = req.files.article;
  await textFile.mv(__dirname + "/upload/" + textFile.name);

  res.send(`Hi ${req.body.name}, You've uploaded ${textFile.name}`);
});

app.post("/form", (req, res) => {
  const name = req.body.name;
  res.json({ hello: `Hello, ${name} !` });
});

// Mengetes express file upload
test("test request express file upload", async () => {
  let response = await request(app)
    .post("/file")
    .set("Content-Type", "multipart/form-data")
    .field("name", "Bondan")
    .attach("article", __dirname + "/contoh.txt");
  expect(response.text).toBe("Hi Bondan, You've uploaded contoh.txt");
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
