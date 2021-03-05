const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if ( message === undefined || key === undefined ) {
      throw new Error
    }

    if ( message.length !== key.length ) {
      key = key.repeat(Math.ceil(message.length/key.length)).slice(0, message.length);
    }
    
    let messageEnctypted = '';
    
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      if ( this.alphabet.indexOf(message[i]) === -1 ) {
        messageEnctypted += message[i];
        message = message.slice(0, i) + message.slice(i + 1);
        i--;
      }
      else {
        messageEnctypted += this.alphabet[(this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[i])) % this.alphabet.length];
      }
    }
    
    return this.bool === true ? messageEnctypted : [...messageEnctypted].reverse().join('');
  }    
  decrypt(encryptedMessage, key) {
    if ( encryptedMessage  === undefined || key === undefined ) {
      throw new Error
    }

    if ( encryptedMessage.length !== key.length ) {
      key = key.repeat(Math.ceil(encryptedMessage.length/key.length)).slice(0, encryptedMessage.length);
    }
    
    let messageDectypted = '';
    
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < encryptedMessage.length; i++) {
      if ( this.alphabet.indexOf(encryptedMessage[i]) === -1 ) {
        messageDectypted += encryptedMessage[i];
        encryptedMessage = encryptedMessage.slice(0, i) + encryptedMessage.slice(i + 1);
        i--;
      }
      else {
        messageDectypted += this.alphabet[(this.alphabet.indexOf(encryptedMessage[i]) - this.alphabet.indexOf(key[i]) + this.alphabet.length) % this.alphabet.length];
      }
    }
    
    return this.bool === true ? messageDectypted : [...messageDectypted].reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
