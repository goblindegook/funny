/* global expect it */

import same from '..'

it('same() of the same value returns true', () => {
  expect(same(1, 1)).toBe(true)
})

it('same() of the same reference returns true', () => {
  const a = [1]
  const b = a
  expect(same(a, b)).toBe(true)
})

it('same() of different values returns false', () => {
  expect(same(1, 2)).toBe(false)
})

it('same() of different references returns false', () => {
  expect(same([1], [1])).toBe(false)
})
