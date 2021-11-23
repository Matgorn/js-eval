import { longestWords } from "./longest-words";

test('longestWords("You are just an old antidisestablishmentarian") should return ["antidisestablishmentarian"]', () => {
  expect(longestWords("You are just an old antidisestablishmentarian")).toStrictEqual(['antidisestablishmentarian']);
});

test('longestWords("I gave a present to my parents") should return ["present", "parents"]', () => {
  expect(longestWords("I gave a present to my parents")).toStrictEqual(["present", "parents"]);
});

test('longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo")should return ["Buffalo"]', () => {
  expect(longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo")).toStrictEqual(["Buffalo"]);
});
