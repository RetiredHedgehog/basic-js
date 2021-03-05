const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '( )') {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    position = position - 1;
    if ( this.chain[position] === undefined || isNaN(position) || position % 1 !== 0 ) { 
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    chainStr = '';
    this.chain.forEach(elem => 
      elem === '( )' ? chainStr += '( )~~' : chainStr += `( ${elem} )~~`);
    this.chain = [];
    return chainStr.slice(0, -2);
  }
};

module.exports = chainMaker;
