/* global expect it */

import curryN from '..'

it('returns a function', () => {
  const curriedFn = curryN(i => i)
  expect(typeof curriedFn).toBe('function')
})

it('takes functions with arity 0', () => {
  const curriedOne = curryN(0, () => 1)
  expect(curriedOne()).toBe(1)
})

it('takes functions with arity 2', () => {
  const curriedPow = curryN(2, Math.pow)
  expect(curriedPow(2, 3)).toBe(8)
  expect(curriedPow(2)(3)).toBe(8)
})

it('takes functions with arity 2 plus arguments', () => {
  const curriedPow = curryN(2, Math.pow, 2)
  expect(curriedPow(3)).toBe(8)
})

it('takes functions with custom arity', () => {
  const curriedMax = curryN(3, Math.max)
  expect(curriedMax(1, 2, 3)).toBe(3)
  expect(curriedMax(1, 2)(3)).toBe(3)
  expect(curriedMax(1)(2, 3)).toBe(3)
  expect(curriedMax(1)(2)(3)).toBe(3)
})
