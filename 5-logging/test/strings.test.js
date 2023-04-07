test("string matchers test", () => {
  let nilai = "Bondan Jody";
  expect(nilai).toBe("Bondan Jody");
  expect(nilai).toEqual("Bondan Jody");
  expect(nilai).toMatch(/ody/); // Berisi regex
});
