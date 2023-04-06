test("numbers matchers", () => {
  let nilai = 1 + 3;
  expect(nilai).toBeGreaterThan(2);
  expect(nilai).toBeGreaterThanOrEqual(4);
  expect(nilai).toBeLessThan(10);
  expect(nilai).toBeLessThanOrEqual(4);

  //   Kita juga bisa menggunakan toBe()
  expect(nilai).toBe(4);
  expect(nilai).toEqual(4);
});
