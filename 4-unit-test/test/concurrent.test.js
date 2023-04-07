import { sayHello } from "../src/async";

test.concurrent("concurrent 1", async () => {
  await expect(sayHello("Bondan")).resolves.toBe("Hello, Bondan !");
});
test.concurrent("concurrent 2", async () => {
  await expect(sayHello("Bondan")).resolves.toBe("Hello, Bondan !");
});
test.concurrent("concurrent 3", async () => {
  await expect(sayHello("Bondan")).resolves.toBe("Hello, Bondan !");
});
