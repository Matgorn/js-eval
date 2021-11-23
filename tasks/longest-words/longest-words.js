function longestWords(string) {
  const words = string.split(/\W+/g);
  const result = [];
  let longest = 0;

  words.forEach(word => {
    if (word.length > longest) {
      longest = word.length;
      result.length = 0;
      result.push(word);
    }

    if (word.length === longest && !result.find(longestWord => longestWord.toLowerCase() === word.toLowerCase())) {
      result.push(word);
    }
  });

  return result;
};