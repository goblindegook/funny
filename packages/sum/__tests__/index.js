/* global expect it */

import sum from '..'

it('sum() with an empty array returns 0', () => {
  expect(sum([])).toBe(0)
})

it('sum() with a single item array returns the item', () => {
  expect(sum([1])).toBe(1)
})

it('sum() adds all the numbers', () => {
  expect(sum([1, 2, 3, 4])).toBe(10)
})
