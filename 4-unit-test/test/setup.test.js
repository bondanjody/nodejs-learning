import { sum } from "../src/sum";

beforeEach(() => {
  console.log("Anything Before Each");
});
// Kode di atas akan dijalankan sekali setiap sebelum sebuah test dijalankan

afterEach(() => {
  console.log("Anything After Each");
});
// Kode di atas akan dijalankan sekali setiap sesudah sebuah test dijalankan

test("first test", () => {
  expect(sum(10, 10)).toBe(20);
  console.log("First test!");
});

test("second test", () => {
  expect(sum(20, 20)).toBe(40);
  console.log("Second test!");
});
