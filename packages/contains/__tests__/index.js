/* global expect it xit */

import contains from '..'

it('contains() is false when element does not exist in array', () => {
  expect(contains(4, [1, 2, 3])).toBe(false)
})

it('contains() is true when element exists in array', () => {
  expect(contains(1, [1, 2, 3])).toBe(true)
})

xit('contains() is true when object exists in array', () => {
  expect(contains([1], [[1], [2], [3]])).toBe(true)
})
