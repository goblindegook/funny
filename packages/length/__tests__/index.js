/* global expect it */

import length from '..'
import range from '../../range'

it('length of empty list is 0', () => {
  expect(length([])).toBe(0)
})

it('length of list with one element is 1', () => {
  expect(length([1])).toBe(1)
})

it('length of list with N elements is N', () => {
  const n = Math.ceil(Math.random() * 1000)
  expect(length(range(1, n))).toBe(n)
})
