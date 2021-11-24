import { arrayPairSum, arrayPairSum2 } from "./array-pair-sum";

describe('arrayPairSum', () => {
  it('returns pairs of numbers out of the second argument\'s array which sum of is equal to first argument', () => {
    // When sum is equal 10 and array is equal to [3, 4, 5, 6, 7]
    expect(arrayPairSum(10, [3, 4, 5, 6, 7])).toStrictEqual('[(4, 6), (3, 7)]');

    // When sum is equal 8 and array is equal to [3, 4, 5, 4, 4]
    expect(arrayPairSum(8, [3, 4, 5, 4, 4])).toStrictEqual('[(3, 5)]');

    // When sum is equal 25 and array is equal to [4, 7, 12, 21, 13]
    expect(arrayPairSum(25, [4, 7, 12, 21, 13])).toStrictEqual('[(12, 13), (4, 21)]');
  })
});

describe('arrayPairSum2', () => {
  it('returns pairs of numbers out of the second argument\'s array which sum of is equal to first argument', () => {
    // When sum is equal 10 and array is equal to [3, 4, 5, 6, 7]
    expect(arrayPairSum2(10, [3, 4, 5, 6, 7])).toStrictEqual([[4, 6], [3, 7]]);

    // When sum is equal 8 and array is equal to [3, 4, 5, 4, 4]
    expect(arrayPairSum2(8, [3, 4, 5, 4, 4])).toStrictEqual([[3, 5]]);

    // When sum is equal 25 and array is equal to [4, 7, 12, 21, 13]
    expect(arrayPairSum2(25, [4, 7, 12, 21, 13])).toStrictEqual([[12, 13], [4, 21]]);
  })
});
