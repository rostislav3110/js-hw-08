const arr4 = ["hello", "world", "javascript", "callback"];
const char = "a";

function filterStrings(string, callback) {
  const filteredString = string.filter((str) => callback(str));
  return filteredString;
}

function callbackFunction(str) {
  return str.includes(char);
}

const getletter = filterStrings(arr4, callbackFunction);

console.log(getletter);
