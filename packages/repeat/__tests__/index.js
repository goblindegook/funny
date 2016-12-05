/* global expect it */

import repeat from '..'

it('repeat() returns an empty array on 0', () => {
  expect(repeat('fun', 0)).toEqual([])
})

it('repeat() returns a single item array on 1', () => {
  expect(repeat('fun', 1)).toEqual(['fun'])
})

it('repeat() returns arrays with n items', () => {
  expect(repeat('fun', 2)).toEqual(['fun', 'fun'])
})

it('repeat() returns arrays with n objects', () => {
  const obj = { fun: 'fun' }
  expect(repeat(obj, 2)).toEqual([obj, obj])
})

it('repeat() does not flatten list items', () => {
  const list = [1]
  expect(repeat(list, 2)).toEqual([list, list])
})

it('repeat() is curried', () => {
  expect(repeat('fun')(2)).toEqual(['fun', 'fun'])
})
