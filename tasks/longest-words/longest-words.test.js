import { longestWords } from "./longest-words";

describe('longestWords', () => {
  it('returns array of the longest word or words from the input', () => {
    // When input equals "You are just an old antidisestablishmentarian"
    expect(longestWords("You are just an old antidisestablishmentarian")).toStrictEqual(['antidisestablishmentarian']);

    // When input equals "I gave a present to my parents"
    expect(longestWords("I gave a present to my parents")).toStrictEqual(["present", "parents"]);

    // When input equals "Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo"
    expect(longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo")).toStrictEqual(["Buffalo"]);
  });
});
