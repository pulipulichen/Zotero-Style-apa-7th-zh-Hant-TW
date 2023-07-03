module.exports = function ($xml) {
  // let macroNodes = $xml('style > macro')
  // let macroNames = []
  // for (let i = 0; i < macroNodes.length; i++) {
  //   macroNames.push(macroNodes.eq(i).attr('name'))
  // }
  // console.log(macroNames)
  for (let i in $xml) {
    if (typeof($xml[i]) === 'function') {
      // console.log(i)
    }
  }

  // console.log($xml.html())
  console.log($xml.find("macro").length)
}