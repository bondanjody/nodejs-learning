import { sayHello } from "../src/async";

test("test async function", async () => {
  const result = await sayHello("Bondan");
  expect(result).toBe("Hello, Bondan !");
});
