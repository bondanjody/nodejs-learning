test("test toBe", () => {
  const nama = "Bondan";
  const hello = `Hello, ${nama}`;
  expect(hello).toBe("Hello, Bondan");
});

test("test toEqual", () => {
  let person = { id: "p2" };
  Object.assign(person, { nama: "Bondan" });
  expect(person).toEqual({ id: "p2", nama: "Bondan" });
});
