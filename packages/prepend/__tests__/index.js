/* global expect it */

import prepend from '..'

it('prepend() inserts an item into an empty array', () => {
  expect(prepend(1, [])).toEqual([1])
})

it('prepend() inserts an array item into an empty array without flattening', () => {
  expect(prepend([1], [])).toEqual([[1]])
})

it('prepend() prepends to non-empty arrays', () => {
  expect(prepend(2, [1])).toEqual([2, 1])
})

it('prepend() prepends array items to non-empty arrays without flattening', () => {
  expect(prepend([2], [1])).toEqual([[2], 1])
})

it('prepend() is curried', () => {
  expect(prepend(2)([1])).toEqual([2, 1])
})
