const repeatString = function (string, number) {
  let repeatedString = "";
  if (number >= 0) {
    for (let i = 0; i < number; i++) {
      repeatedString += string;
    }
    return repeatedString;
  } else {
    return "ERROR";
  }
};

module.exports = repeatString;
