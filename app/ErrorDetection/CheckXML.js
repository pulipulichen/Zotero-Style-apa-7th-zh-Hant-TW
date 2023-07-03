const { DOMParser } = require('xmldom');
const parser = new DOMParser();

module.exports = function (xmlData) {
  try {
    parser.parseFromString(xmlData, 'application/xml');
    return true
  } catch (error) {
    
    return error
  }
}

