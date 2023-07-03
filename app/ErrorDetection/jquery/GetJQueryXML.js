const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const $ = require('jquery');

module.exports = function (xmlData) {
  // const xmlData = '<root><item>Item 1</item><item>Item 2</item></root>';
  // const xmlDoc = $.parseXML(xmlData);
  // const $xml = $(xmlDoc);
  // for (let i in $) {
  //   if (typeof($[i]) === 'function') {
  //     console.log(i)
  //   }
  // }
  const dom = new JSDOM('<!DOCTYPE html><html><body>' + xmlData + '</body></html>');
  global.window = dom.window;
  global.document = dom.window.document;

  
  // const $ = require('jquery')
  const $xml = $(dom.window)
  throw $xml.find('macro').length
  return $xml
}

