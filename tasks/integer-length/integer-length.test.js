import { integerLength, integerLength2, integerLength3, integerLength4 } from "./integer-length";

// No.1 variant
test('integerLength(3412) should return 20', () => {
  expect(integerLength(3412)).toBe(4);
});

test('integerLength(3817374657483729182749) should return 20', () => {
  expect(integerLength(38173746574837291827)).toBe(20);
});

// No. 2 variant
test('integerLength2(3412) should return 20', () => {
  expect(integerLength2(3412)).toBe(4);
});

test('integerLength2(3817374657483729182749) should return 20', () => {
  expect(integerLength2(38173746574837291827)).toBe(20);
});

// No.3 variant
test('integerLength3(3412) should return 20', () => {
  expect(integerLength3(3412)).toBe(4);
});

test('integerLength3(3817374657483729182749) should return 20', () => {
  expect(integerLength3(38173746574837291827)).toBe(20);
});

// No.4 variant
test('integerLength4(3412) should return 20', () => {
  expect(integerLength4(3412)).toBe(4);
});

test('integerLength4(3817374657483729182749) should return 20', () => {
  expect(integerLength4(3817374657483729182749)).toBe(22);
});

test('integerLength4(38173746574837291827492342347862345982738475392) should return 20', () => {
  expect(integerLength4(38173746574837291827492342347862345982738475392)).toBe(47);
});
