/* global expect it */

import findLast from '..'

it('findLast() returns undefined on an empty array', () => {
  expect(findLast(x => true, [])).toBe(undefined)
})

it('findLast() returns undefined when no elements match the predicate', () => {
  expect(findLast(x => false, [1, 2, 3])).toBe(undefined)
})

it('findLast() finds the first element that matches the predicate', () => {
  expect(findLast(x => x === 1, [1, 2, 3])).toEqual(1)
})

it('findLast() is curried', () => {
  expect(findLast(x => x === 1)([1, 2, 3])).toEqual(1)
})
