import { sumOfArrayPlusOne, sumOfArrayPlusOne2, sumOfArrayPlusOne3 } from "./sum-of-array-plus-one";

describe('sumOfArrayPlusOne', () => {
  it('return value which is sum of numbers from the input array each incremented by 1', () => {
    // When input is equal to [1, 2, 3, 4]
    expect(sumOfArrayPlusOne([1, 2, 3, 4])).toBe(14);

    // When input is equal to [4, 7, 10, 23, 1, 21]
    expect(sumOfArrayPlusOne([4, 7, 10, 23, 1, 21])).toBe(72);

    // When input is equal to [10, 32, 421, 321, 23, 1, 41]
    expect(sumOfArrayPlusOne([10, 32, 421, 321, 23, 1, 41])).toBe(856);
  });
});

describe('sumOfArrayPlusOne2', () => {
  it('return value which is sum of numbers from the input array each incremented by 1', () => {
    // When input is equal to [1, 2, 3, 4]
    expect(sumOfArrayPlusOne2([1, 2, 3, 4])).toBe(14);

    // When input is equal to [4, 7, 10, 23, 1, 21]
    expect(sumOfArrayPlusOne2([4, 7, 10, 23, 1, 21])).toBe(72);

    // When input is equal to [10, 32, 421, 321, 23, 1, 41]
    expect(sumOfArrayPlusOne2([10, 32, 421, 321, 23, 1, 41])).toBe(856);
  });
});

describe('sumOfArrayPlusOne3', () => {
  it('return value which is sum of numbers from the input array each incremented by 1', () => {
    // When input is equal to [1, 2, 3, 4]
    expect(sumOfArrayPlusOne3([1, 2, 3, 4])).toBe(14);

    // When input is equal to [4, 7, 10, 23, 1, 21]
    expect(sumOfArrayPlusOne3([4, 7, 10, 23, 1, 21])).toBe(72);

    // When input is equal to [10, 32, 421, 321, 23, 1, 41]
    expect(sumOfArrayPlusOne3([10, 32, 421, 321, 23, 1, 41])).toBe(856);
  });
});
