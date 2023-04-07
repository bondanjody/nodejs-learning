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

// Kita juga bisa menggunakan Object pada Each Function, serta memanfaatkan fitur destructuring
const tableObject = [
  { numbers: [10, 10, 10], expected: 30 },
  { numbers: [10, 10, 10, 10], expected: 40 },
];

test.each(tableObject)(
  "test object data sumAll($numbers) should results %expected",
  ({ numbers, expected }) => {
    expect(sumAll(numbers)).toBe(expected);
  }
);
