module.exports = function countCats(matrix) {
  let result = 0;
  if (matrix) {
    matrix.forEach(element => {
      result += element.filter(element => element === "^^").length;
    });
  }
  return result;
};
