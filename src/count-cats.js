const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix ) {
  return matrix.reduce((a,b) =>
    a + b.reduce((aInner,bInner) => (bInner === '^^') ? (aInner + 1) : (aInner + 0), 0), 0);
};
