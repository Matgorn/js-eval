export const findMultiplesOf3And2 = (n) => {
  let total = 0;

  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }

  return total;
};
