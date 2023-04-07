import { sumAll } from "../src/sum";

describe("when call sumAll([10,2,3])", () => {
  it("should get 15 with parameters [10,2,3]", () => {
    expect(sumAll([10, 2, 3])).toBe(15);
  });
});
