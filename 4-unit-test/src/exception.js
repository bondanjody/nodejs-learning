export class MyException extends Error {}

export const callMe = (name) => {
  if (name === "Bondan") {
    throw new MyException("Ups.. an error has occured !");
  } else {
    return "OK";
  }
};
