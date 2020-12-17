const removeFromArray = function (array, ...elementsToBeRemoved) {
  for (let i = 0; i < elementsToBeRemoved.length; i++) {
    if (array.includes(elementsToBeRemoved[i])) {
      const position = array.indexOf(elementsToBeRemoved[i]);
      array.splice(position, 1);
    }
  }
  return array;
};

module.exports = removeFromArray;
