/* global expect it */

import remainder from '..'

it('remainder of 2 and 2 is 0', () => {
  expect(remainder(2, 2)).toBe(0)
})

it('remainder of 3 and 2 is 1', () => {
  expect(remainder(3, 2)).toBe(1)
})

it('remainder of 8 and 3 is 2', () => {
  expect(remainder(8, 3)).toBe(2)
})

it('remainder has the same sign as the dividend', () => {
  expect(remainder(-3, 2)).toBe(-1)
})

it('remainder is curried', () => {
  expect(remainder(3)(2)).toBe(1)
})
