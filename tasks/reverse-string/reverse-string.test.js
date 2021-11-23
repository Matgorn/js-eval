import { reverseString, reverseString2, reverseString3, reverseString4, reverseString5 } from "./reverse-string";

// No.1 variant
test('reverseString("Hello World") should return "dlroW olleH"', () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
});

test('reverseString("To be or not to be") should return "eb ot ton ro eb oT"', () => {
  expect(reverseString("To be or not to be")).toBe("eb ot ton ro eb oT");
});

// No.2 variant
test('reverseString2("Hello World") should return "dlroW olleH"', () => {
  expect(reverseString2("Hello World")).toBe("dlroW olleH");
});

test('reverseString2("To be or not to be") should return "eb ot ton ro eb oT"', () => {
  expect(reverseString2("To be or not to be")).toBe("eb ot ton ro eb oT");
});

// No.3 variant
test('reverseString3("Hello World") should return "dlroW olleH"', () => {
  expect(reverseString3("Hello World")).toBe("dlroW olleH");
});

test('reverseString3("To be or not to be") should return "eb ot ton ro eb oT"', () => {
  expect(reverseString3("To be or not to be")).toBe("eb ot ton ro eb oT");
});

// No.4 variant
test('reverseString4("Hello World") should return "dlroW olleH"', () => {
  expect(reverseString4("Hello World")).toBe("dlroW olleH");
});

test('reverseString4("To be or not to be") should return "eb ot ton ro eb oT"', () => {
  expect(reverseString4("To be or not to be")).toBe("eb ot ton ro eb oT");
});

// No.5 variant
test('reverseString5("Hello World") should return "dlroW olleH"', () => {
  expect(reverseString5("Hello World")).toBe("dlroW olleH");
});

test('reverseString5("To be or not to be") should return "eb ot ton ro eb oT"', () => {
  expect(reverseString5("To be or not to be")).toBe("eb ot ton ro eb oT");
});
