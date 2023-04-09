import Mustache from "mustache";
import fs from "fs/promises";

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

// Menggunakan Data Nested Object
test("Menggunakan Data Nested Object", () => {
  const data = Mustache.render("Hello {{person.name}}", {
    person: { name: "Bondan" },
  });
  expect(data).toBe("Hello Bondan");
});

// Mengakses file mustache
test("Mengakses file mustache", async () => {
  const helloTemplate = await fs
    .readFile("./templates/hello.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, { title: "Bondan Web" });
  console.log(data);
  expect(data).toContain("Bondan Web");
});

// Mengakses Sections (TANPA DATA)
test("Mengakses section NOT show", async () => {
  const helloTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {});
  console.log(data);
  expect(data).not.toContain("Bondan Web");
});

// Mengakses Sections (DENGAN DATA)
test("Mengakses section show", async () => {
  const helloTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    person: { name: "Bondan" },
  });
  //   Harus menggunakan key 'person'
  console.log(data);
  expect(data).toContain("Hello World");
});

// Mengakses Sections Data
test("Mengakses section data", async () => {
  const helloTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    person: { name: "Bondan" },
  });
  console.log(data);
  expect(data).toContain("Hello World Bondan!");
});

// Demo inverted section (ibarat pengganti else dalam percabangan)
test("Menggunakan inverted section", async () => {
  const helloTemplate = await fs
    .readFile("./templates/person.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    // Jika data kosong
  });
  console.log(data);
  expect(data).toContain("Hello guest");
});

// Menggunakan List
test("Menggunakan list", async () => {
  const helloTemplate = await fs
    .readFile("./templates/hobbies.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    hobbies: ["musik", "programming"],
  });
  console.log(data);
  expect(data).toContain("musik");
});
