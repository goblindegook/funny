/* global expect it */

import apply from '..'

it('apply() invokes the function with the arguments provided in the array', () => {
  const fn = (...args) => args
  const args = [1, 2, 3]
  expect(apply(fn, args)).toEqual(args)
})

it('apply() is curried', () => {
  const fn = (...args) => args
  const args = [1, 2, 3]
  expect(apply(fn)(args)).toEqual(args)
})