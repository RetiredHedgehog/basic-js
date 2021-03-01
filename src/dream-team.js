const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  
  members = members.filter(elem => typeof elem === 'string')
  
  if (members.length === 0) return false;

  return members.map(elem => elem.trim()[0].toUpperCase()).sort().join('');
};
