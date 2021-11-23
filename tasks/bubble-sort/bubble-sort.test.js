import { bubbleSort, bubbleSort2 } from "./bubble-sort";

// No.1 variant
test('bubbleSort(564, 343, 56, 5641, 345,2,-3) should return [-3, 2, 56, 343, 345, 564, 5641]', () => {
  expect(bubbleSort(564, 343, 56, 5641, 345,2,-3)).toStrictEqual([-3, 2, 56, 343, 345, 564, 5641]);
});

test('bubbleSort(-1000, 1000, 25, 251, -251, 1, 999) should return [-1000, -251, 1, 25, 251, 999, 1000]', () => {
  expect(bubbleSort(-1000, 1000, 25, 251, -251, 1, 999)).toStrictEqual([-1000, -251, 1, 25, 251, 999, 1000]);
});

test('bubbleSort(-1, 0, 1, -2 ,-20 , 11) should return [-20, -2, -1, 0, 11]', () => {
  expect(bubbleSort(-1, 0, 1, -2,-20 , 11)).toStrictEqual([-20, -2, -1, 0, 1, 11]);
});

// No. 2 variant
test('bubbleSort2(564, 343, 56, 5641, 345,2,-3) should return [-3, 2, 56, 343, 345, 564, 5641]', () => {
  expect(bubbleSort2(564, 343, 56, 5641, 345,2,-3)).toStrictEqual([-3, 2, 56, 343, 345, 564, 5641]);
});

test('bubbleSort2(-1000, 1000, 25, 251, -251, 1, 999) should return [-1000, -251, 1, 25, 251, 999, 1000]', () => {
  expect(bubbleSort2(-1000, 1000, 25, 251, -251, 1, 999)).toStrictEqual([-1000, -251, 1, 25, 251, 999, 1000]);
});

test('bubbleSort2(-1, 0, 1, -2 ,-20 , 11) should return [-20, -2, -1, 0, 11]', () => {
  expect(bubbleSort2(-1, 0, 1, -2,-20 , 11)).toStrictEqual([-20, -2, -1, 0, 1, 11]);
});
