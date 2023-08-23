const arr = ["Hello World", "Goodbye", "JavaScript", "World of Warcraft"];
const char = "Goodbye";

function findWords(words, callback) {
  const findWord = words.filter((word) => callback(word));
  return findWord;
}

function callbackFunction(word) {
  return word.includes(char);
}

const result = findWords(arr, callbackFunction);
console.log(result);
