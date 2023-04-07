import { sum } from "../src/sum";

// Setup Function
// beforeEach(() => {
//   console.log("Anything Before Each");
// });
// Kode di atas akan dijalankan sekali setiap sebelum sebuah test dijalankan

// afterEach(() => {
//   console.log("Anything After Each");
// });
// Kode di atas akan dijalankan sekali setiap sesudah sebuah test dijalankan

// OneTime Setup Function
beforeAll(() => {
  console.log("Anything Before All");
});

afterAll(() => {
  console.log("Anything After All");
});

test("first test", () => {
  expect(sum(10, 10)).toBe(20);
  console.log("First test!");
});

test("second test", () => {
  expect(sum(20, 20)).toBe(40);
  console.log("Second test!");
});

// NOTE : One-Time Setup Function sangat berguna misalnya kita melakukan testing code yang membutuhkan koneksi ke database, tentunya kita hanya ingin kode 'afterAll' dijalankan sekali saja yaitu di akhir
// NOTE : untuk kode Async, kita tinggal menambahkan 'async' di awal callback
