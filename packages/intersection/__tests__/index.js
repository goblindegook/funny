/* global expect it */

import intersection from '..'

it('intersection() of two empty lists returns an empty list', () => {
  expect(intersection([], [])).toEqual([])
})

it('intersection() of a list with an empty list returns an empty list', () => {
  expect(intersection([1, 2, 3], [])).toEqual([])
})

it('intersection() of two lists returns elements shared among them', () => {
  expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3])
})

it('intersection() of two lists returns elements shared among them in order', () => {
  expect(intersection([1, 2, 3], [4, 3, 2])).toEqual([3, 2])
})

it('intersection() of two lists returns elements shared among them with no duplicates', () => {
  expect(intersection([1, 2, 2], [2, 2, 3])).toEqual([2])
})

it('intersection() is curried', () => {
  expect(intersection([1, 2])([2, 3])).toEqual([2])
})
