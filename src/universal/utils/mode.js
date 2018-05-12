const mode = (array, getField = (item) => item) => {
  const map = new Map()
  let maxFreq = 0
  let maxFreqItem

  for (let ii = 0; ii < array.length; ii++) {
    const item = array[ii]
    const itemField = getField(item)
    const prevFreq = map.get(itemField) || 0
    const nextFreq = prevFreq + 1
    if (nextFreq > maxFreq) {
      maxFreq = nextFreq
      maxFreqItem = itemField
    }
    map.set(itemField, nextFreq)
  }
  return maxFreqItem
}

export default mode
