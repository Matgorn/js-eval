import { test } from "@jest/globals";
import { arrayPairSum, arrayPairSum2 } from "./array-pair-sum";

test('arrayPairSum(10, [3, 4, 5, 6, 7]) should return [(4,6), (3,7)]', () => {
  expect(arrayPairSum(10, [3, 4, 5, 6, 7])).toStrictEqual('[(4, 6), (3, 7)]');
});

test('arrayPairSum(8, [3, 4, 5, 4, 4]) should return [(3, 5)]', () => {
  expect(arrayPairSum(8, [3, 4, 5, 4, 4])).toStrictEqual('[(3, 5)]');
});

test('arrayPairSum(25, [4, 7, 12, 21, 13]) should return [(12, 13), (4, 21)]', () => {
  expect(arrayPairSum(25, [4, 7, 12, 21, 13])).toStrictEqual('[(12, 13), (4, 21)]');
});

test('arrayPairSum2(10, [3, 4, 5, 6, 7]) should return [[4,6], [3,7]]', () => {
  expect(arrayPairSum2(10, [3, 4, 5, 6, 7], true)).toStrictEqual([[4, 6], [3, 7]]);
});

test('arrayPairSum2(8, [3, 4, 5, 4, 4]) should return [[3, 5]]', () => {
  expect(arrayPairSum2(8, [3, 4, 5, 4, 4], true)).toStrictEqual([[3, 5]]);
});

test('arrayPairSum2(25, [4, 7, 12, 21, 13]) should return [[12, 13], [4, 21]]', () => {
  expect(arrayPairSum2(25, [4, 7, 12, 21, 13], true)).toStrictEqual([[12, 13], [4, 21]]);
});