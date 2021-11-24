import { bubbleSort, bubbleSort2 } from "./bubble-sort";

describe('bubbleSort', () => {
  it('sorts numbers provided as input by bubble sort approach', () => {
    // When input is 564, 343, 56, 5641, 345,2,-3
    expect(bubbleSort(564, 343, 56, 5641, 345,2,-3)).toStrictEqual([-3, 2, 56, 343, 345, 564, 5641]);

    // When input is -1000, 1000, 25, 251, -251, 1, 999
    expect(bubbleSort(-1000, 1000, 25, 251, -251, 1, 999)).toStrictEqual([-1000, -251, 1, 25, 251, 999, 1000]);

    // When input is -1, 0, 1, -2,-20 , 11
    expect(bubbleSort(-1, 0, 1, -2,-20 , 11)).toStrictEqual([-20, -2, -1, 0, 1, 11]);
  });
});

describe('bubbleSort2', () => {
  it('sorts numbers provided as input by bubble sort approach', () => {
    // When input is 564, 343, 56, 5641, 345,2,-3
    expect(bubbleSort2(564, 343, 56, 5641, 345,2,-3)).toStrictEqual([-3, 2, 56, 343, 345, 564, 5641]);

    // When input is -1000, 1000, 25, 251, -251, 1, 999
    expect(bubbleSort2(-1000, 1000, 25, 251, -251, 1, 999)).toStrictEqual([-1000, -251, 1, 25, 251, 999, 1000]);

    // When input is -1, 0, 1, -2,-20 , 11
    expect(bubbleSort2(-1, 0, 1, -2,-20 , 11)).toStrictEqual([-20, -2, -1, 0, 1, 11]);
  });
});
