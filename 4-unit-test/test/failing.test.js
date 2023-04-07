import { sayHi } from "../src/sayHi";

test("sayHi success", () => {
  expect(sayHi("Bondan")).toBe("Hi, Bondan !");
});

test.failing("sayHi error", () => {
  expect(sayHi(null));
});

// Failing mengharapkan test nya error

// atau bisa juga dengan menggunakan matcher
test("sayHi matcher", () => {
  expect(() => sayHi(undefined)).toThrow();
});
