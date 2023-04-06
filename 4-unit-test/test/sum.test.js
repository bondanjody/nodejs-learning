import { sum } from "../src/sum";

test("sum(1,2) harusnya hasilnya 3", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

// Parameter pertama pada 'test' adalah nama yang kita sesuaikan sendiri, lalu parameter kedua adalah callback untuk melakukan testing
