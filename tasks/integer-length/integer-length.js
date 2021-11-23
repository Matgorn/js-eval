export const integerLength = (int) => {
  const intAsString = String(int);

  return intAsString.length;
};

export const integerLength2 = (int) => `${int}`.length;

export const integerLength3 = (int) => ('' + int).length;

// Only implementation that returns valid result
// for numbers that has more than 21 digits
export const integerLength4 = (int) => Math.ceil(Math.log(int + 1) / Math.LN10);
