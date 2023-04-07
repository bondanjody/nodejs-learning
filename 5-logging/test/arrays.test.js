test("arrays matchers test", () => {
  let names = ["Bondan", "Jody"];
  expect(names).toContain("Jody"); // Mengecek salah satu
  expect(names).toEqual(["Bondan", "Jody"]); // Harus sama semua

  const students = [{ name: "Bondan" }, { name: "Jody" }];
  expect(students).toContainEqual({ name: "Bondan" }); // Mengecek objek
  expect(students).toEqual([{ name: "Bondan" }, { name: "Jody" }]);
});
