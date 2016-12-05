/* global expect it */

import divide from '..'

it('divide() supports the property of zero', () => {
  expect(divide(0, 2)).toBe(0)
})

it('divide() supports floating point results', () => {
  expect(divide(1, 2)).toBe(0.5)
})

it('divide() supports negation', () => {
  expect(divide(-1, 2)).toBe(-0.5)
})

it('divide() is curried', () => {
  expect(divide(1)(2)).toBe(0.5)
})
