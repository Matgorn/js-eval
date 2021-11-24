import { integerLength, integerLength2, integerLength3, integerLength4 } from "./integer-length";

describe('integerLength', () => {
  it('returns number of digits of the provided number input limited to 21 digits', () => {
    // When input is equals 3412
    expect(integerLength(3412)).toBe(4);

    // When input is equals 38173746574837291827
    expect(integerLength(38173746574837291827)).toBe(20);
  });
});

describe('integerLength2', () => {
  it('returns number of digits of the provided number input limited to 21 digits', () => {
    // When input is equals 3412
    expect(integerLength2(3412)).toBe(4);

    // When input is equals 38173746574837291827
    expect(integerLength2(38173746574837291827)).toBe(20);
  });
});

describe('integerLength3', () => {
  it('returns number of digits of the provided number input limited to 21 digits', () => {
    // When input is equals 3412
    expect(integerLength3(3412)).toBe(4);

    // When input is equals 38173746574837291827
    expect(integerLength3(38173746574837291827)).toBe(20);
  });
});

describe('integerLength3', () => {
  it('returns number of digits of the provided number input', () => {
    // When input is equals 3412
    expect(integerLength3(3412)).toBe(4);

    // When input is equals 38173746574837291827
    expect(integerLength3(38173746574837291827)).toBe(20);

    // When input is equals 38173746574837291827492342347862345982738475392
    expect(integerLength4(38173746574837291827492342347862345982738475392)).toBe(47);
  });
});
