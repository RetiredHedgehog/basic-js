const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if ( date === undefined ) {
    return 'Unable to determine the time of year!';
  }
  if ( typeof date !== 'object' ) {
    throw new Error;
  }
  if ( isNaN(date) ) {
    throw new Error;
  }
  
  if ( date.getMonth() >= 2 && date.getMonth() <= 4 ) {
    return 'spring';
  }
  if ( date.getMonth() >= 5 && date.getMonth() <= 7 ) {
    return 'summer';
  }
  if ( date.getMonth() >= 8 && date.getMonth() <= 10 ) {
    return 'autumn';
  }
  return 'winter';
};
