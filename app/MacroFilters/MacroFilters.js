

const filters = [
  require('./LocaleFilter.js')
]

module.exports = function(macroList) {
  return macroList.map(macro => {
    for (let i = 0; i < filters.length; i++) {
      macro = filters[i](macro)
    }
    return macro
  })
}