'use strict';

const crypto = require('crypto');

// Used by generateJid()
function byteToPaddedHex(byteVal) {
  return (0x100 + byteVal).toString(16).substr(1);
}

function generateJid() {
  const bytes = Array.from(crypto.randomBytes(16));
  return bytes.map(byteToPaddedHex).join('');
};

module.exports = { generateJid }