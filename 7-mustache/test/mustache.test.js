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

// Menggunakan Tag HTML di dalam Mustache
test("Menggunakan Tag HTML di dalam Mustache", () => {
  const data = Mustache.render(
    "Hello my name is {{name}}, and my hobby is {{{hobby}}}",
    { name: "Bondan", hobby: "programming" }
  );
  expect(data).toBe("Hello my name is Bondan, and my hobby is programming");
});
