/* global expect it */

import call from '..'

it('call() invokes the function with the arguments provided', () => {
  const fn = (...args) => args
  const args = [1, 2, 3]
  expect(call(fn, ...args)).toEqual(args)
})

it('call() is curried', () => {
  const fn = (...args) => args
  const args = [1, 2, 3]
  expect(call(fn)(...args)).toEqual(args)
})
