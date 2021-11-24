import { findMultiplesOf3And2 } from "./multiples-of-3-and-2";

describe('findMultiplesOf3And2', () => {
  it('returns the sum of all natural numbers which are multiples of 2 and 3 below provided input value', () => {
    // When input is equal to 10
    expect(findMultiplesOf3And2(10)).toBe(23);

    // When input is equal to 100
    expect(findMultiplesOf3And2(100)).toBe(2318);

    // When input is equal to 500
    expect(findMultiplesOf3And2(500)).toBe(57918);

    // When input is equal to 1000
    expect(findMultiplesOf3And2(1000)).toBe(233168);
  });
});
