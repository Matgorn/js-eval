export const arrayPairSum = (n, arr) => {
  const result = [];
  const uniqueElementsArray = [...new Set(arr)];

  uniqueElementsArray.forEach((num, idx) => {
    const record = uniqueElementsArray.indexOf(n - num);

    if (record >= 0 && record !== idx) {
      result.unshift(`(${num}, ${uniqueElementsArray[record]})`);
      uniqueElementsArray.splice(record, 1);
    }
  });

  const resultStringified = result.join(', ');

  return `[${resultStringified}]`;
}

// Provide additional boolean value as third argument
// to prevent function from creating new Set everytime
// the function is invoked
export const arrayPairSum2 = (n, arr, init) => {
  let result;
  arr = init ? [...new Set(arr)] : arr;

  const firstElement = arr[0];
  const matchingElementIdx = arr.indexOf(n > 0 && firstElement > 0 && n - firstElement);

  if (matchingElementIdx >= 0) {
    result = [firstElement, ...arr.splice(matchingElementIdx, 1)];
  }

  arr.shift();

  if (arr.length > 1) {
    if (!result) {
      return [...arrayPairSum2(n, arr)];
    }
    
    return [...arrayPairSum2(n, arr), result];
  }

  return [result];
};
