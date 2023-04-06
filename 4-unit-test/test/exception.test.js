import { MyException, callMe } from "../src/exception";

test("exception matchers test", () => {
  expect(() => callMe("Bondan")).toThrow(); // Mengecek semua jenis exception
  expect(() => callMe("Bondan")).toThrow(MyException); // Apakah kode akan menghasilkan jenis exception tersebut
  expect(() => callMe("Bondan")).toThrow("Ups.. an error has occured !"); // Apakah kode akan menghasilkan pesan tersebut
});

// test("exception not happens", () => {
//   expect(callMe("John")).toBe("OK");
// });

// NOTE :
// Jika dijalankan maka akan 'passed' atau success yang menandakan bahwa kode tersebut menimbulkan Exception
