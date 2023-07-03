const ejs = require('ejs')
const fs = require('fs')

const ReadFilesAsArray = require('./ReadFilesAsArray.js')

let count = 1

module.exports = function (filePath) {
  console.log('[' + count + ']\t' + (new Date()).toISOString() + '\t' + filePath)
  count++

  let data = {
    info: fs.readFileSync('/src/info.xml', 'utf8'),
    locale: ReadFilesAsArray('/src/locale'),
    macro: ReadFilesAsArray('/src/macro'),
    citation: fs.readFileSync('/src/citation.xml', 'utf8'),
    bibliography: fs.readFileSync('/src/bibliography.xml', 'utf8'),
  }

  const template = fs.readFileSync('/src/main.ejs', 'utf-8');
  const renderedTemplate = ejs.render(template, data);
  fs.writeFileSync('/dist/apa-7th-zh_Hant-TW.csl', renderedTemplate);
}