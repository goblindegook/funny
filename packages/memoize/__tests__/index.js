/* global expect it xit */

import memoize from '..'

it('memoized functions return identical results', () => {
  const memoizedCeil = memoize(Math.ceil)
  expect(memoizedCeil(0.1)).toBe(Math.ceil(1))
})

it('memoized functions cache results', () => {
  const memoizedCeil = memoize(Math.ceil)
  expect(memoizedCeil(0.21)).toBe(1)
  expect(memoizedCeil(0.21)).toBe(1)
})

xit('memoized functions cache results from function arguments', () => {
  const memoizedFn = memoize((fn, arg) => fn(arg))
  expect(memoizedFn(Math.ceil, 0.3)).toBe(1)
  expect(memoizedFn(Math.floor, 0.3)).toBe(0)
})
