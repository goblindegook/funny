/* global expect it */

import append from '..'

it('append() inserts an item into an empty array', () => {
  expect(append(1, [])).toEqual([1])
})

it('append() inserts an array item into an empty array without flattening', () => {
  expect(append([1], [])).toEqual([[1]])
})

it('append() appends to non-empty arrays', () => {
  expect(append(2, [1])).toEqual([1, 2])
})

it('append() appends array items to non-empty arrays without flattening', () => {
  expect(append([2], [1])).toEqual([1, [2]])
})

it('append() is curried', () => {
  expect(append(2)([1])).toEqual([1, 2])
})
