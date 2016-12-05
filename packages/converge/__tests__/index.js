/* global expect it */

import converge from '..'

it('invokes the function with the converged functions and arguments provided', () => {
  const fn = (...args) => args
  const add = (a, b) => a + b
  const mult = (a, b) => a * b
  const args = [2, 3]

  expect(converge(fn, [add, mult], ...args)).toEqual(fn(add(...args), mult(...args)))
})

it('is curried', () => {
  const fn = (...args) => args
  const add = (a, b) => a + b
  const mult = (a, b) => a * b
  const args = [2, 3]

  expect(converge(fn)([add, mult])(...args)).toEqual(fn(add(...args), mult(...args)))
})
