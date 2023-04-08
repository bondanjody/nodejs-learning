import express from "express";
import request from "supertest";

const app = express();

const router = express.Router();
router.use((req, res, next) => {
  console.log(`Receive request : ${req.originalUrl}`);
  next();
});

router.get("/feature/a", (req, res) => {
  res.send("Feature a");
});

// Ketika router belum dipanggil di app
test("test router disabled", async () => {
  let response = await request(app).get("/feature/a");
  expect(response.status).toBe(404);
});

// Ketika router sudah dipanggil di app
test("test router enabled", async () => {
  app.use(router);
  let response = await request(app).get("/feature/a");
  expect(response.text).toBe("Feature a");
});
