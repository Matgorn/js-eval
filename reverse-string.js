const reverseString = (string) => string.split('').reverse().join('');

const reverseString2 = (string) => {
  let result = '';

  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }

  return result;
};

const reverseString3 = (string) => {
  let result = ''

  for (let i = 1; i < string.length + 1; i++) {
    result += string[string.length - i];
  }

  return result;
};

const reverseString4 = (string) => {
  const result = [];

  string.split('').forEach(character => result.unshift(character));

  return result.join('');
};

const reverseString5 = (string) => string.split('').reduce((acc, currVal) => `${currVal}${acc}`, '');