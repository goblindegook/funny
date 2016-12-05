/* global expect it */

import multiply from '..'

it('multiply() supports the property of zero', () => {
  expect(multiply(0, 3)).toBe(0)
})

it('multiply() supports the identity property', () => {
  expect(multiply(1, 3)).toBe(3)
})

it('multiply() supports the commutative property', () => {
  expect(multiply(2, 3)).toBe(multiply(3, 2))
})

it('multiply() supports the associative property', () => {
  expect(multiply(multiply(2, 3), 4)).toBe(multiply(2, multiply(3, 4)))
})

it('multiply() supports negation', () => {
  expect(multiply(-1, 3)).toBe(-3)
})

it('multiply() is curried', () => {
  expect(multiply(1)(3)).toBe(3)
})
