/* global expect it */

import any from '..'

it('any() of an empty array returns false', () => {
  expect(any(i => i, [])).toBe(false)
})

it('any() of a list that fully matches the predicate returns true', () => {
  expect(any(i => i, [true, true])).toBe(true)
})

it('any() of a list that partially matches the predicate returns true', () => {
  expect(any(i => i, [true, false])).toBe(true)
})

it('any() of a list that never matches the predicate returns false', () => {
  expect(any(i => i, [false, false])).toBe(false)
})

it('any() is curried', () => {
  expect(any(i => i)([true, false])).toBe(true)
})
