import Mustache from "mustache";

test("Menggunakan Mustache", () => {
  const data = Mustache.render("Hello {{name}}", { name: "Bondan" });
  expect(data).toBe("Hello Bondan");
});

// Menggunakan Mustache Cache
test("Menggunakan Mustache Cache", () => {
  Mustache.parse("Hello {{name}}");
  const data = Mustache.render("Hello {{name}}", { name: "Bondan" });
  expect(data).toBe("Hello Bondan");
});
