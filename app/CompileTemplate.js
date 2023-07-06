const ejs = require('ejs')
const fs = require('fs')

const ReadFilesAsArray = require('./ReadFilesAsArray.js')
const CheckXML = require('./ErrorDetection/CheckXML.js')
const CheckJQuery = require('./ErrorDetection/jquery/CheckJQuery.js')
const MacroFilters = require('./MacroFilters/MacroFilters.js')


let count = 1

function getDate () {
  let d = (new Date()).toISOString()
  d = d.slice(0, d.lastIndexOf('.')) + '+00:00'
  return d
}

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
  let renderedTemplate = ejs.render(template, data);

  let map1 = {
    '<updated>{{ UPDATED }}</updated>': `<updated>${ getDate() }</updated>`,
    //'': ``
  }

  Object.keys(map1).forEach((from) => {
    let to = map1[from]
    renderedTemplate = renderedTemplate.split(from).join(to)
  })

  let checkResult = CheckXML(renderedTemplate)
  if (checkResult !== true) {
    console.error(checkResult)
    return false
  }
  if (CheckJQuery(renderedTemplate) === false) {
    return false
  }
  
  fs.writeFileSync('/dist/apa-7th-zh_Hant-TW.csl', renderedTemplate);

  let map2 = {
    'font-style="italic"': 'font-weight="bold"',
    '<title>American Psychological Association 7th edition (zh-Hant-TW)</title>': '<title>American Psychological Association 7th edition (zh-Hant-TW, bold)</title>',
    '<title-short>APA7TW</title-short>': '<title-short>APA7TW-BOLD</title-short>',
    '<id>http://www.zotero.org/styles/apa-7th-zh_Hant-TW</id>': '<id>http://www.zotero.org/styles/apa-7th-zh_Hant-TW-bold</id>',
    '<link href="http://www.zotero.org/styles/apa-7th-zh-Hant-TW" rel="self"/>': '<link href="http://www.zotero.org/styles/apa-7th-zh-Hant-TW-bold" rel="self"/>',
  }

  let renderedTemplateBold = renderedTemplate
  Object.keys(map2).forEach((from) => {
    let to = map2[from]
    renderedTemplateBold = renderedTemplateBold.split(from).join(to)
  })
  
  fs.writeFileSync('/dist/apa-7th-zh_Hant-TW-bold.csl', renderedTemplateBold);
}