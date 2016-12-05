/* global expect it */

import product from '..'

it('product() with an empty array returns 1', () => {
  expect(product([])).toBe(1)
})

it('product() with a single item array returns the item', () => {
  expect(product([1])).toBe(1)
})

it('product() multiplies all the numbers', () => {
  expect(product([1, 2, 3, 4])).toBe(24)
})
