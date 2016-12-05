/* global expect it */

import findIndex from '..'

it('findIndex() returns -1 on an empty array', () => {
  expect(findIndex(x => true, [])).toBe(-1)
})

it('findIndex() returns -1 when no elements match the predicate', () => {
  expect(findIndex(x => false, [1, 2, 3])).toBe(-1)
})

it('findIndex() findIndexs the first element that matches the predicate', () => {
  expect(findIndex(x => x === 1, [1, 2, 1])).toBe(0)
})

it('findIndex() is curried', () => {
  expect(findIndex(x => x === 1)([1, 2, 1])).toBe(0)
})
