const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterNumbers(numbers, callback) {
  const filteredNumbers = numbers.filter((number) => callback(number));
  return filteredNumbers;
}

function callbackFunction(number) {
  return number % 2 === 0;
}

const evenNumber = filterNumbers(arr, callbackFunction);
console.log(evenNumber);
