const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(``);

var $ = jQuery = require('jquery')(window);

module.exports = function (xmlData) {
  // console.log($($.parseXML(xmlData)).find('macro').length);
  return $($.parseXML(xmlData))
}