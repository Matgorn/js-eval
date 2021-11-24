import { stringFormat } from "./string-format";

describe('stringFormat', () => {
  it('return string with marked parts replaced by input values in the order defined by marks', () => {
    // When the first argument is equal to "Hello {0} {1}", second is equal to "Mr." and third to "X"
    expect(stringFormat('Hello {0} {1}', 'Mr.', 'X')).toBe('Hello Mr. X');

    // When the first argument is equal to "{1}_{0}", second is equal to "{1}" and third to "{0}"
    expect(stringFormat('{1}_{0}', '{1}', '{0}')).toBe('{0}_{1}');
  });
});
