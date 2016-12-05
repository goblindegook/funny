/* global expect it */

import subtract from '..'

it('subtract() returns zero on identical arguments', () => {
  expect(subtract(3, 3)).toBe(0)
})

it('subtract() returns negative results', () => {
  expect(subtract(1, 3)).toBe(-2)
})

it('subtract() supports negation', () => {
  expect(subtract(1, -3)).toBe(4)
})

it('subtract() is curried', () => {
  expect(subtract(3)(2)).toBe(1)
})
