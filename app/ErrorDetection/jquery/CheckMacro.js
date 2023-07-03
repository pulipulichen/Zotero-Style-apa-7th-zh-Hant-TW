module.exports = function ($xml) {
  let macroNodes = $xml.find('macro')
  let macroNames = []
  for (let i = 0; i < macroNodes.length; i++) {
    macroNames.push(macroNodes.eq(i).attr('name'))
  }

  let macroNotFound = []
  let useMacroNodes = $xml.find('[macro]')
  for (let i = 0; i < useMacroNodes.length; i++) {
    let name = useMacroNodes.eq(i).attr('macro')
    if (macroNotFound.indexOf(name) > -1) {
      continue
    }

    if (macroNames.indexOf(name) === -1) {
      macroNotFound.push(name)
    }
  }

  if (macroNotFound.length > 0) {
    console.error(`macro not found (${macroNotFound.length}): ${macroNotFound.join(', ')}`)
    return false
  }

  // console.log(macroNames)
  // for (let i in $xml) {
  //   if (typeof($xml[i]) === 'function') {
  //     // console.log(i)
  //   }
  // }

  // console.log($xml.html())
  // console.log($xml.find("macro").length)
  // console.log($xml.find("[macro]").length)
  return true
}