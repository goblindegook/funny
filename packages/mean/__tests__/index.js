/* global expect it */

import mean from '..'

it('mean() of an empty array is not a number', () => {
  expect(isNaN(mean([]))).toBe(true)
})

it('mean() of a single-item array', () => {
  expect(mean([1])).toBe(1)
})

it('mean() of a numerical array', () => {
  expect(mean([2, 4])).toBe(3)
})

it('mean() of a numerical array with negative numbers', () => {
  expect(mean([-2, 2])).toBe(0)
})
