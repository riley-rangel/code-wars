const { expect } = require('chai')
const { describe, it } = require('mocha')
const RomanNumerals = require('../challenges/4kyu/romanNumerals')

describe('MOST EXCELLENT TEST SUITE', () => {

  describe('roman numerals challenge', () => {

    describe('"toRoman" method', () => {
      const method = RomanNumerals.toRoman

      it('should return 0 if not passed a string as argument', () => {
        const testArgs = [undefined, 1, ['string', 'string'], {foo: 'bar'}, null, NaN]

        for (const arg of testArgs) {
          expect(method(arg)).to.equal(0)
        }
      })

      it('should return 0 if passed a string that includes non-valid chars', () => {
        expect(method('')).to.equal(0)
        expect(method('banana')).to.equal(0)
      })

      it('should return a number converted from a string of all-valid characters', () => {
        const testPairs = [
          ['C', 100],
          ['XCV', 95],
          ['XCIV', 94],
          ['MCMXC', 1990],
          ['MMVIII', 2008],
          ['MDCLXVI', 1666]
        ]

        for (const [key, val] of testPairs) {
          expect(method(key)).to.equal(val)
        }
      })

    })

  })

})
