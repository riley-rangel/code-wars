
const symbolMap = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

const RomanNumerals = {
  toRoman: function (string) {
    if (!string || typeof string !== 'string')
      return 0

    const letters = string.split('')

    for (const letter of letters) {
      if (!Object.keys(symbolMap).includes(letter))
        return 0
    }

    return letters.map(letter => symbolMap[letter])
      .map((value, i, arr) => value < arr[i + 1] ? 0 - value : value)
      .reduce((sum, val) => sum + val, 0)
  }
}

module.exports = RomanNumerals
