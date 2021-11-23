function integerDifference(n, ...numsArray) {
  const usedIndexes = [];

  for (let i = 0; i < numsArray.length; i++) {
    for (let j = 0; j < numsArray.length; j++) {

      if (j !== i && (numsArray[i] - numsArray[j] === n || numsArray[j] - numsArray[i] === n)) {
        const currentIndexSet = [i, j].sort((a, b) => a - b).toString();
        
        if (!usedIndexes.includes(currentIndexSet)) {
          usedIndexes.push(currentIndexSet);
        }
      }

    } 
  }

  return usedIndexes.length;
};

function integerDifference2(n, ...numsArray) {
  const store = {};
  let result = 0;

  numsArray.forEach(num => {
    store[num] = (store[num] || 0) + 1;
    result += (store[num - n] || 0) + (store[num + n] || 0);
  });

  return result;
};