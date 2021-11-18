function stringFormat(main, ...exchangers) {
  let resultString = main;

  exchangers.forEach((exchanger, idx) => {
    resultString = resultString.replace(`{${idx}}`, exchanger)
  });

  resultString = resultString.replace(/\{([0-9]+)\}/gm, '');

  return resultString;
};