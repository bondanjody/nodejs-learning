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

// Menggunakan List Object
test("Menggunakan list object", async () => {
  const helloTemplate = await fs
    .readFile("./templates/students.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    students: [
      {
        name: "John Stones",
        address: "United Kingdom",
      },
      {
        name: "Bernardo Silva",
        address: "Portugal",
      },
    ],
  });
  console.log(data);
  expect(data).toContain("Bernardo Silva");
  expect(data).toContain("United Kingdom");
});

// Menggunakan Functions di Mustache
test("Menggunakan function", async () => {
  const parameter = {
    name: "Bondan",
    upper: () => {
      return (text, render) => {
        return render(text).toUpperCase();
      };
    },
  };

  const data = Mustache.render("Hello {{#upper}}{{name}}{{/upper}}", parameter);
  //   Menggunakan function upper
  //   data name dimasukkan ke dalam parameter 'text'
  //   render digunakan untuk mengkonversi tag mustache menjadi sesuai data yang kita definisikan
  console.log(data);
  expect(data).toContain("Hello BONDAN");
});

// Menggunakan Commentar di Mustache
test("Menggunakan komentar", async () => {
  const helloTemplate = await fs
    .readFile("./templates/comment.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(helloTemplate, {
    title: "Hello World!",
  });
  console.log(data);
  expect(data).toContain("Hello World!");
  expect(data).not.toContain("komentar");
});

// Partials pada Mustache
test("Menggunakan Partials pada Mustache", async () => {
  const headerTemplate = await fs
    .readFile("./templates/header.mustache")
    .then((data) => data.toString());
  const contentTemplate = await fs
    .readFile("./templates/content.mustache")
    .then((data) => data.toString());
  const footerTemplate = await fs
    .readFile("./templates/footer.mustache")
    .then((data) => data.toString());

  const data = Mustache.render(
    contentTemplate,
    {
      title: "Bondan Web",
      section: "Hello World!",
      owner: "Bondan Jody",
    },
    {
      header: headerTemplate,
      footer: footerTemplate,
    }
  );
  // Parameter ketiga adalah wajib apabila kita ingin menggunakan Partials
  // NOTE : pastikan parameter render pertama adalah 'content' / file main(utama)

  console.log(data);
  expect(data).toContain("Bondan Web");
  expect(data).toContain("Hello World!");
  expect(data).toContain("Powered by : Bondan Jody");
});
