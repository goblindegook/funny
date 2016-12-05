/* global expect it */

import unique from '..'

it('unique() of an empty list returns an empty list', () => {
  expect(unique([])).toEqual([])
})

it('unique() of a list with unique items returns the list unchanged', () => {
  expect(unique([1, 2, 3])).toEqual([1, 2, 3])
})

it('unique() of a list with duplicate items returns the list with duplicates removed', () => {
  expect(unique([1, 2, 3, 1, 3])).toEqual([1, 2, 3])
})
