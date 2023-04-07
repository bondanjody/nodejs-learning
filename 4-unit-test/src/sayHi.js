export function sayHi(name) {
  if (name) {
    return `Hi, ${name} !`;
  } else {
    throw new Error("Name is REQUIRED");
  }
}
