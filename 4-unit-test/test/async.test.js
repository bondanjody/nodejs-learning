import { sayHello } from "../src/async";

// testing async code
test("test async function", async () => {
  const result = await sayHello("Bondan");
  expect(result).toBe("Hello, Bondan !");
});

// async matchers
test("async matchers", async () => {
  await expect(sayHello("Bondan")).resolves.toBe("Hello, Bondan !");
  await expect(sayHello()).rejects.toBe("Invalid NAME!"); // parameter toBe harus sama dengan nilai reject pada async.js
});

// NOTE : Setelah resolves.<boleh diisi dengan matcher apa saja, termasuk NOT>
