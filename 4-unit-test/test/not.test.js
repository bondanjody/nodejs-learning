test("String not Matchers", () => {
  const name = "Bondan Jody";
  expect(name).not.toBe("John");
  expect(name).not.toEqual("James");
  expect(name).not.toMatch(/baron/);
});

test("Number not matchers", () => {
  const value = 12 + 12;
  expect(value).not.toBeGreaterThan(90);
  expect(value).not.toBeLessThan(2);
  expect(value).not.toBe(12);
});

// NOTE : bisa digunakan di semua Matchers, tinggal menambahkan 'not'
