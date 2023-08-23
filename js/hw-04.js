const names = ["Андрій", "Олександр", "Максим", "Юлія", "Наталія"];

function getLongestName(name, callback) {
  let longestname = name[0];
  for (let i = 1; i < name.length; i++) {
    if (name[i].length > longestname.length) {
      longestname = name[i];
    }
  }

  return callback(longestname);
}

function callbackFunction(name) {
  console.log(`найдовше iм'я ${name}`);
}

getLongestName(names, callbackFunction);
