const reverseString = function (string) {
  const charsArray = [];
  for (let i = string.length - 1; i >= 0; i--) {
    charsArray.push(string[i]);
  }
  return charsArray.join("");
};

module.exports = reverseString;
