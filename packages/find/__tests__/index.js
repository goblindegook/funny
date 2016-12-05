/* global expect it */

import find from '..'

it('find() returns undefined on an empty array', () => {
  expect(find(x => true, [])).toBe(undefined)
})

it('find() returns undefined when no elements match the predicate', () => {
  expect(find(x => false, [1, 2, 3])).toBe(undefined)
})

it('find() finds the first element that matches the predicate', () => {
  expect(find(x => x === 1, [1, 2, 3])).toBe(1)
})

it('find() is curried', () => {
  expect(find(x => x === 1)([1, 2, 3])).toBe(1)
})
