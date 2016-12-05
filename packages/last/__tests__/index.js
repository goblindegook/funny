/* global expect it */

import last from '..'

it('returns the last element of an array', () => {
  expect(last([1, 2, 3])).toBe(3)
})

it('returns undefined if the array is empty', () => {
  expect(last([])).toBe(undefined)
})
