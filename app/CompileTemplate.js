const ejs = require('ejs')
const fs = require('fs')

const ReadFilesAsArray = require('./ReadFilesAsArray.js')
const CheckXML = require('./ErrorDetection/CheckXML.js')
const CheckJQuery = require('./ErrorDetection/jquery/CheckJQuery.js')
const MacroFilters = require('./MacroFilters/MacroFilters.js')


let count = 1

module.exports = function (filePath) {
  console.log('[' + count + ']\t' + (new Date()).toISOString() + '\t' + filePath)
  count++

  let data = {
    info: fs.readFileSync('/src/info.xml', 'utf8'),
    locale: ReadFilesAsArray('/src/locale'),
    macro: MacroFilters(ReadFilesAsArray('/src/macro')),
    citation: fs.readFileSync('/src/citation.xml', 'utf8'),
    bibliography: fs.readFileSync('/src/bibliography.xml', 'utf8'),
  }

  const template = fs.readFileSync('/src/main.ejs', 'utf-8');
  const renderedTemplate = ejs.render(template, data);

  let checkResult = CheckXML(renderedTemplate)
  if (checkResult !== true) {
    console.error(checkResult)
    return false
  }
  if (CheckJQuery(renderedTemplate) === false) {
    return false
  }
  
  fs.writeFileSync('/dist/apa-7th-zh_Hant-TW.csl', renderedTemplate);
}