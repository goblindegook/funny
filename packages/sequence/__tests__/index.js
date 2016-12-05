/* global expect it */

import sequence from '..'

it('sequence() accepts a single function', () => {
  const biggest = sequence(Math.max)
  expect(biggest(0.1, 2.3, 4.5, 4.2)).toBe(4.5)
})

it('sequence() combines multiple functions left-to-right', () => {
  const biggestRoundedUp = sequence(Math.max, Math.ceil)
  expect(biggestRoundedUp(0.1, 2.3, 4.5, 4.2)).toBe(5)
})
