export const sumOfArrayPlusOne = (arr) => {
  let result = 0;

  arr.forEach(num => result += num + 1);

  return result;
};

export const sumOfArrayPlusOne2 = (arr) => arr.reduce((acc, currVal) => acc + currVal + 1, 0);

export const sumOfArrayPlusOne3 = (arr) => {
  let result = 0;

  for (let num of arr) {
    result += num + 1;
  }

  return result;
};
