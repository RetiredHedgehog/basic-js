const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  function repeaterAdditional (addition = '', additionRepeatTimes = 1, additionSeparator = '|') {
    let temp = '';
    
    for (let i = 0; i < additionRepeatTimes; i++) {
      temp += addition + additionSeparator;
    }

    return temp.slice(0, -(additionSeparator.length));
  }

  function repeaterStr (str = '', repeatTimes = 1, separator = '+') {
    let temp = '';

    for (let i = 0; i < repeatTimes; i++) {
      temp += str + repeaterAdditional(options.addition, options.additionRepeatTimes, options.additionSeparator) + separator;
    }
    
    return temp.slice(0, -(separator.length));
  }

  return repeaterStr(str, options.repeatTimes, options.separator);
};
  
