import { calculate, calculateAndReturn } from "../src/sum";

test("test calculate", () => {
  const callback = jest.fn();
  callback.mockReturnValueOnce(30);
  callback.mockReturnValueOnce(40);
  calculate([10, 10, 10], callback);
  calculate([10, 10, 10, 10], callback);

  expect(callback.mock.calls.length).toBe(2); // menunjukkan bahwa callback dipanggil 2 kali
  //   console.info(callback.mock.calls); // Output : [[30], [40]]
  expect(callback.mock.calls[0][0]).toBe(30);
  expect(callback.mock.calls[1][0]).toBe(40);

  expect(calculateAndReturn([10, 10, 10], callback)).toBe(30);
  expect(calculateAndReturn([10, 10, 10, 10], callback)).toBe(40);

  expect(callback.mock.results[0].value).toBe(30);
  expect(callback.mock.results[1].value).toBe(40);
});

// Melakukan test tanpa mock
// test("test calculate without mock function", () => {
//   const contohCallback = (total) => {
//     console.info(total);
//   };
//   calculate([10, 10, 10], contohCallback);
//   calculate([10, 10, 10, 10], contohCallback);
// });

// Kelebihan menggunakan mock function adalah dapat mendeteksi apabila terjadi error di file sum.js

test("test mock return value", () => {
  const callback = jest.fn();
  callback.mockReturnValueOnce(30);
  callback.mockReturnValueOnce(40);

  expect(calculateAndReturn([10, 10, 10], callback)).toBe(30);
  expect(calculateAndReturn([10, 10, 10, 10], callback)).toBe(40);

  expect(callback.mock.results[0].value).toBe(30);
  expect(callback.mock.results[1].value).toBe(40);
});
