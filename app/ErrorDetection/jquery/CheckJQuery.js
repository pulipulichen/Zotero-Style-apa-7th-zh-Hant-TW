const GetJQueryXML = require('./GetJQueryXML.js')

const CheckMacro = require('./CheckMacro.js')
const CheckMacroDuplicated = require('./CheckMacroDuplicated.js')

const checkList = [
  CheckMacro,
  CheckMacroDuplicated,
]

module.exports = function (xml) {

  const $xml = GetJQueryXML(xml)


  for (let i = 0; i < checkList.length; i++) {
    if (checkList[i]($xml) === false) {
      return false
    }
  }

  return true
}