import { sum, sumAll } from "../src/sum";

test("Tes sum function 1", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
test("Tes sum function 2", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
test("Tes sum function 3", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});
test("sumAll tes 1", () => {
  const result = sumAll([1, 2, 1, 2]);
  expect(result).toBe(6);
});
// Parameter pertama pada 'test' adalah nama yang kita sesuaikan sendiri, lalu parameter kedua adalah callback untuk melakukan testing
