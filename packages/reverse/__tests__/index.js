/* global expect it */

import reverse from '..'

it('reverse() does not change an empty array', () => {
  expect(reverse([])).toEqual([])
})

it('reverse() does not change a single item array', () => {
  expect(reverse([0])).toEqual([0])
})

it('reverse() reverses the order of an array', () => {
  expect(reverse([0, 1, 2])).toEqual([2, 1, 0])
})
