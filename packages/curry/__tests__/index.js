/* global expect it */

import curry from '..'

it('returns a function', () => {
  const curriedFn = curry(i => i)
  expect(typeof curriedFn).toBe('function')
})

it('takes functions with arity 0', () => {
  const curriedOne = curry(() => 1)
  expect(curriedOne()).toBe(1)
})

it('takes functions with arity n', () => {
  const curriedPow = curry(Math.pow)
  expect(curriedPow(2, 3)).toBe(8)
  expect(curriedPow(2)(3)).toBe(8)
})

it('takes functions with arity n plus arguments', () => {
  const curriedPow = curry(Math.pow, 2)
  expect(curriedPow(3)).toBe(8)
})

it('takes functions of unspecified arity', () => {
  const curriedMax = curry(Math.max)
  expect(curriedMax(1, 2, 3)).toBe(3)
  expect(curriedMax(1)(2, 3)).toBe(3)
})
