const GetJQueryXML = require('./GetJQueryXML.js')

const CheckMacro = require('./CheckMacro.js')

module.exports = function (xml) {

  const $xml = GetJQueryXML(xml)

  const checkList = [
    CheckMacro
  ]

  for (let i = 0; i < checkList.length; i++) {
    if (checkList[i]($xml) === false) {
      return false
    }
  }

  return true
}