/* global expect it */

import none from '..'

it('none() of an empty array returns true', () => {
  expect(none(i => i, [])).toBe(true)
})

it('none() of a list that fully matches the predicate function returns false', () => {
  expect(none(i => i, [true, true])).toBe(false)
})

it('none() of a list that partially matches the predicate function returns false', () => {
  expect(none(i => i, [true, false])).toBe(false)
})

it('none() of a list that never matches the predicate function returns true', () => {
  expect(none(i => i, [false, false])).toBe(true)
})
