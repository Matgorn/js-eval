import { integerDifference, integerDifference2 } from "./integer-difference";

describe('integerDifference', () => {
  it('returns the number of times that the difference provided as first argument between numbers from second argument\'s array appears', () => {
    // When first argument is equal 4 and second argument equal to [1, 1, 5, 6, 9, 16, 27]
    expect(integerDifference(4, [1, 1, 5, 6, 9, 16, 27])).toBe(3);

    // When first argument is equal 2 and second argument equal to [1, 1, 3, 3]
    expect(integerDifference(2, [1, 1, 3, 3])).toBe(4);

    // When first argument is equal 5 and second argument equal to [1, 2, 64, 5, 7, 43, 24, 25, 64, 69]
    expect(integerDifference(5, [1, 2, 64, 5, 7, 43, 24, 25, 64, 69])).toBe(3);
  });
});

describe('integerDifference2', () => {
  it('returns the number of times that the difference provided as first argument between numbers from second argument\'s array appears', () => {
    // When first argument is equal 4 and second argument equal to [1, 1, 5, 6, 9, 16, 27]
    expect(integerDifference2(4, [1, 1, 5, 6, 9, 16, 27])).toBe(3);

    // When first argument is equal 2 and second argument equal to [1, 1, 3, 3]
    expect(integerDifference2(2, [1, 1, 3, 3])).toBe(4);

    // When first argument is equal 5 and second argument equal to [1, 2, 64, 5, 7, 43, 24, 25, 64, 69]
    expect(integerDifference2(5, [1, 2, 64, 5, 7, 43, 24, 25, 64, 69])).toBe(3);
  });
});
