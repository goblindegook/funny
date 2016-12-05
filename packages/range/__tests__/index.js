/* global expect it */

import range from '..'

it('range() creates single item ranges', () => {
  expect(range(1, 1)).toEqual([1])
})

it('range() creates ascending ranges', () => {
  expect(range(1, 3)).toEqual([1, 2, 3])
})

it('range() creates descending ranges', () => {
  expect(range(3, 1)).toEqual([3, 2, 1])
})

it('range() arguments default to 0', () => {
  expect(range(2, undefined)).toEqual([2, 1, 0])
  expect(range(undefined, 2)).toEqual([0, 1, 2])
})

it('range() is curried', () => {
  expect(range(1)(3)).toEqual([1, 2, 3])
})
