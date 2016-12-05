/* global expect it */

import difference from '..'

it('difference() of two empty lists returns an empty list', () => {
  expect(difference([], [])).toEqual([])
})

it('difference() of a list with an empty list returns the original list', () => {
  const list = [1, 2, 3]
  expect(difference(list, [])).toEqual(list)
})

it('difference() of two lists returns elements not shared among them', () => {
  expect(difference([1, 2], [2, 3])).toEqual([1, 3])
})

it('difference() is curried', () => {
  expect(difference([1, 2])([2, 3])).toEqual([1, 3])
})
