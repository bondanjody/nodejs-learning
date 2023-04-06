export function sum(bil1, bil2) {
  return bil1 + bil2;
}

export function sumAll(bil) {
  let total = 0;

  for (let number of bil) {
    total += number;
  }
  return total;
}
