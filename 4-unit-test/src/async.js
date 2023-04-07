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

export async function getBalance(name, from) {
  const balance = await from();
  return { name, balance };
}
