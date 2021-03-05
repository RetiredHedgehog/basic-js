const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if ( !Array.isArray(arr) ) {
    throw new Error;
  }

  let control = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let arrCopy = arr.slice();
  let arrT = [];

  for (let i = 0; i < arr.length; i++) {
    if ( arrCopy[i] === control[0] ) {
      arrCopy[i + 1] = undefined;
      continue;
    }
    if ( arrCopy[i] === control[1] && typeof arrCopy[i-1] !== 'undefined' ) {
      arrCopy[i - 1] = undefined;
      arrT.pop();
      continue;
    }
    if ( arrCopy[i] === control[2] && typeof arrCopy[i+1] !== 'undefined' ) {
      arrT.push(arrCopy[i + 1]);
      continue;
    }
    if ( arrCopy[i] === control[3] && typeof arrCopy[i-1] !== 'undefined' ) {
      arrT.push(arrCopy[i - 1]);
      continue;
    }
    if ( typeof arrCopy[i] !== 'undefined' &&  control.indexOf(arrCopy[i]) === -1 ) {
      arrT.push(arrCopy[i])  
      continue;
    }
  }
  return arrT;
};
