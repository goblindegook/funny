/* global expect it */

import all from '..'

it('all() of an empty array returns true', () => {
  expect(all(i => i, [])).toBe(true)
})

it('all() of a list that fully matches the predicate function returns true', () => {
  expect(all(i => i, [true, true])).toBe(true)
})

it('all() of a list that partially matches the predicate function returns false', () => {
  expect(all(i => i, [true, false])).toBe(false)
})

it('all() of a list that never matches the predicate function returns false', () => {
  expect(all(i => i, [false, false])).toBe(false)
})
