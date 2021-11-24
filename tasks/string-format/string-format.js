export const stringFormat = (main, ...exchangers) => {
  let resultString = main;

  exchangers.forEach((exchanger, idx) => {
    resultString = resultString.replace(`{${idx}}`, exchanger)
  });

  return resultString;
};
