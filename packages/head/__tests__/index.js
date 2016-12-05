/* global expect it */

import head from '..'

it('head() returns the first element of an array', () => {
  expect(head([1, 2, 3])).toBe(1)
})

it('head() returns undefined if the array is empty', () => {
  expect(head([])).toBe(undefined)
})
