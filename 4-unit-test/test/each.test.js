import { sumAll } from "../src/sum";

// test("sumAll([10,10,10])", () => {
//   expect(sumAll([10, 10, 10])).toBe(30);
// });
// test("sumAll([10,10,10,10])", () => {
//   expect(sumAll([10, 10, 10, 10])).toBe(40);
// });

// Daripada kita menggunakan kode test seperti di atas, kita bisa memanfaatkan Each Function (untuk menghindari pengulangan kita mengetikkan kode)

// Mendefinisikan table yang berisi array
const table = [
  [[10, 10, 10], 30],
  [[10, 10, 10, 10], 40],
];

test.each(table)("test sumAll(%s) should results %i", (numbers, expected) => {
  expect(sumAll(numbers)).toBe(expected);
});
// numbers akan menyimpan array [10,10,10], expected akan menyimpan nilai 30  (array pertama), begitu seterusnya
