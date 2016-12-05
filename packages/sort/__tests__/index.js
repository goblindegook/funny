/* global expect it */

import sort from '..'

const comparator = (a, b) => a - b

it('sort() returns an empty array', () => {
  expect(sort(comparator, [])).toEqual([])
})

it('sort() returns a single item array', () => {
  expect(sort(comparator, [1])).toEqual([1])
})

it('sort() returns a previously sorted array', () => {
  expect(sort(comparator, [1, 2, 3])).toEqual([1, 2, 3])
})

it('sort() sorts an array', () => {
  expect(sort(comparator, [3, 2, 1])).toEqual([1, 2, 3])
})

it('sort() is curried', () => {
  expect(sort(comparator)([3, 2, 1])).toEqual([1, 2, 3])
})
