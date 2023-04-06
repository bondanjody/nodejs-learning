test("truthiness test", () => {
  let nilai = null;
  expect(nilai).toBeNull();
  expect(nilai).toBeDefined();
  expect(nilai).toBeFalsy();

  nilai = undefined;
  expect(nilai).toBeUndefined();
  expect(nilai).toBeFalsy();

  nilai = "Bondan";
  expect(nilai).toBeTruthy();
});
