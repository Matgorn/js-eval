export const reverseString = (string) => string.split('').reverse().join('');

export const reverseString2 = (string) => {
  let result = '';

  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  return result;
};

export const reverseString3 = (string) => {
  let result = ''

  for (let i = 1; i < string.length + 1; i++) {
    result += string[string.length - i];
  }

  return result;
};

export const reverseString4 = (string) => {
  const result = [];

  string.split('').forEach(character => result.unshift(character));

  return result.join('');
};

export const reverseString5 = (string) => string.split('').reduce((acc, currVal) => `${currVal}${acc}`, '');
