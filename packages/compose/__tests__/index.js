/* global expect it */

import compose from '..'

it('returns a function', () => {
  const biggest = compose(Math.max)
  expect(typeof biggest).toBe('function')
})

it('accepts a single function', () => {
  const biggest = compose(Math.max)
  expect(biggest(0.1, 2.3, 4.5, 4.2)).toBe(4.5)
})

it('combines multiple functions right-to-left', () => {
  const biggestRoundedUp = compose(Math.ceil, Math.max)
  expect(biggestRoundedUp(0.1, 2.3, 4.5, 4.2)).toBe(5)
})
