import { findMultiplesOf3And2 } from "./multiples-of-3-and-2";

test('findMultiplesOf3And2(10) to return 23', () => {
  expect(findMultiplesOf3And2(10)).toBe(23);
});

test('findMultiplesOf3And2(100) to return 2318', () => {
  expect(findMultiplesOf3And2(100)).toBe(2318);
});

test('findMultiplesOf3And2(500) to return 57918', () => {
  expect(findMultiplesOf3And2(500)).toBe(57918);
});

test('findMultiplesOf3And2(1000) to return 233168', () => {
  expect(findMultiplesOf3And2(1000)).toBe(233168);
});
