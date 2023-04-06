export async function sayHello(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name) {
        resolve(`Hello, ${name} !`);
      } else {
        reject("Invalid NAME!");
      }
    }, 1000);
  });
}
