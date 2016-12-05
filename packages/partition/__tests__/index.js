/* global expect it */

import partition from '..'

it('partition() of an empty array returns two empty arrays', () => {
  expect(partition(x => true, [])).toEqual([[], []])
})

it('partition() puts all items in the first array if always true', () => {
  expect(partition(x => true, [1, 2, 3])).toEqual([[1, 2, 3], []])
})

it('partition() puts all items in the second array if always false', () => {
  expect(partition(x => false, [1, 2, 3])).toEqual([[], [1, 2, 3]])
})

it('partition() splits the arrays according to the predicate', () => {
  expect(partition(x => x % 2, [1, 2, 3])).toEqual([[1, 3], [2]])
})

it('partition() does not flatten array items', () => {
  expect(partition(x => x.length === 1, [[1], [2], [3, 4]])).toEqual([[[1], [2]], [[3, 4]]])
})

it('partition() is curried', () => {
  expect(partition(x => x % 2)([1, 2, 3])).toEqual([[1, 3], [2]])
})
