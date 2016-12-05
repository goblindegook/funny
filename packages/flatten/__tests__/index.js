/* global expect it */

import flatten from '..'

it('flatten() always returns an array', () => {
  expect(flatten(1)).toEqual([])
})

it('flatten() does not change a flattened array', () => {
  expect(flatten([1, 2])).toEqual([1, 2])
})

it('flatten() flattens with arrays at the start', () => {
  expect(flatten([[1, 2], 3])).toEqual([1, 2, 3])
})

it('flatten() flattens with arrays at the end', () => {
  expect(flatten([1, [2, 3]])).toEqual([1, 2, 3])
})
