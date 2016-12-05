/* global expect it */

import concat from '..'

it('cjoins empty arrays into an empty array', () => {
  expect(concat([], [])).toEqual([])
})

it('cjoins arrays', () => {
  expect(concat([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
})

it('cjoins arrays and items', () => {
  expect(concat([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
})

it('ctakes n arguments', () => {
  expect(concat([1], 2, [3], 4)).toEqual([1, 2, 3, 4])
})

it('cis curried', () => {
  expect(concat([1])([2])).toEqual([1, 2])
})
