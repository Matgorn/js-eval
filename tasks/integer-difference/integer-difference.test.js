import { integerDifference, integerDifference2 } from "./integer-difference";

// No.1 variant
test('integerDifference(4, [1, 1, 5, 6, 9, 16, 27]) should return 3', () => {
  expect(integerDifference(4, [1, 1, 5, 6, 9, 16, 27])).toBe(3);
});

test('integerDifference(2, [1, 1, 3, 3]) should return 4', () => {
  expect(integerDifference(2, [1, 1, 3, 3])).toBe(4);
});

test('integerDifference(5, [1, 2, 64, 5, 7, 43, 24, 25, 64, 69]) should return 4', () => {
  expect(integerDifference(5, [1, 2, 64, 5, 7, 43, 24, 25, 64, 69])).toBe(3);
});

// No. 2 variant
test('integerDifference2(4, [1, 1, 5, 6, 9, 16, 27]) should return 3', () => {
  expect(integerDifference2(4, [1, 1, 5, 6, 9, 16, 27])).toBe(3);
});

test('integerDifference2(2, [1, 1, 3, 3]) should return 4', () => {
  expect(integerDifference2(2, [1, 1, 3, 3])).toBe(4);
});

test('integerDifference2(5, [1, 2, 64, 5, 7, 43, 24, 25, 64, 69]) should return 4', () => {
  expect(integerDifference2(5, [1, 2, 64, 5, 7, 43, 24, 25, 64, 69])).toBe(3);
});
