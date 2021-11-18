function integerLength(int) {
  const intAsString = String(int);

  return intAsString.length;
};

const integerLength2 = (int) => `${int}`.length;

const integerLength3 = (int) => ('' + int).length;