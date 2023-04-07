import { getBalance } from "../src/async";

test("mock async function", async () => {
  const from = jest.fn().mockResolvedValueOnce(1900);
  await expect(getBalance("Bondan", from)).resolves.toEqual({
    name: "Bondan",
    balance: 1900,
  });

  await expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1900);
});

// Mengecek get balance error
test.failing("mock async function rejected", async () => {
  const from = jest.fn().mockRejectedValueOnce(new Error("Ups !"));
  await getBalance("Bondan", from);
});
