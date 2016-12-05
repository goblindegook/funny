/* global expect it */

import findLastIndex from '..'

it('findLastIndex() returns -1 on an empty array', () => {
  expect(findLastIndex(x => true, [])).toBe(-1)
})

it('findLastIndex() returns -1 when no elements match the predicate', () => {
  expect(findLastIndex(x => false, [1, 2, 3])).toBe(-1)
})

it('findLastIndex() findLastIndexs the first element that matches the predicate', () => {
  expect(findLastIndex(x => x === 1, [1, 2, 1])).toBe(2)
})

it('findLastIndex() is curried', () => {
  expect(findLastIndex(x => x === 1)([1, 2, 1])).toBe(2)
})
