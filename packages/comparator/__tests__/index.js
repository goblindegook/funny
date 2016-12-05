/* global expect it */

import comparator from '..'

const lt = (a, b) => a < b

it('comparator() returns -1 if a < b', () => {
  expect(comparator(lt)(1, 2)).toBe(-1)
})

it('comparator() returns 1 if a > b', () => {
  expect(comparator(lt)(2, 1)).toBe(1)
})

it('comparator() returns 0 if a = b', () => {
  expect(comparator(lt)(1, 1)).toBe(0)
})
