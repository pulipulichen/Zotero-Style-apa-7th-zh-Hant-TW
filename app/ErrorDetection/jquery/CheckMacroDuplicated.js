function findAllIndexes(array, value) {
  const indexes = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      indexes.push(i);
    }
  }
  return indexes;
}

module.exports = function ($xml) {
  let macroNodes = $xml.find('macro')
  let macroNames = []
  for (let i = 0; i < macroNodes.length; i++) {
    macroNames.push(macroNodes.eq(i).attr('name'))
  }

  let duplicateItems = []
  for (let i = 0; i < macroNames.length; i++) {
    let item = macroNames[i]

    if (duplicateItems.indexOf(item) > -1) {
      continue
    }

    if (findAllIndexes(macroNames, item).length > 1) {
      duplicateItems.push(item)
    }
  }

  if (duplicateItems.length > 0) {
    console.error(`Duplicate macros ${duplicateItems.length}: ${duplicateItems.join(', ')}`)
    return false
  }

  return true
}