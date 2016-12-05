/* global expect it */

import filter from '..'

it('filter() does not change an empty array', () => {
  expect(filter(x => true, [])).toEqual([])
})

it('filter() does not change an array if predicate is always true', () => {
  expect(filter(x => true, [1, 2, 3])).toEqual([1, 2, 3])
})

it('filter() empties an array if predicate is always false', () => {
  expect(filter(x => false, [1, 2, 3])).toEqual([])
})

it('filter() changes an array according to predicate result', () => {
  expect(filter(x => x % 2, [1, 2, 3])).toEqual([1, 3])
})

it('filter() does not flatten array items', () => {
  expect(filter(x => x.length === 1, [[1], [2], [3, 4]])).toEqual([[1], [2]])
})

it('filter() is curried', () => {
  expect(filter(x => x % 2)([1, 2, 3])).toEqual([1, 3])
})
