/* global expect it */

import foldRight from '..'

it('foldRight() passes the combine function the collection item', () => {
  const expected = '4321'
  const actual = foldRight((acc, item) => `${acc}${item}`, '', [1, 2, 3, 4])

  expect(actual).toBe(expected)
})

it('foldRight() passes the combine function the collection index', () => {
  const expected = '3210'
  const actual = foldRight((acc, item, index) => `${acc}${index}`, '', [1, 2, 3, 4])

  expect(actual).toBe(expected)
})

it('foldRight() passes the combine function the collection', () => {
  const expected = 16
  const actual = foldRight((acc, item, index, collection) => acc + collection.length, 0, [1, 2, 3, 4])

  expect(actual).toBe(expected)
})

it('foldRight() loops over an array, applying a combine function and initial value', () => {
  const expected = { even: [4, 2], odd: [3, 1] }
  const actual = foldRight(
    (acc, item) => {
      (item % 2 ? acc.odd : acc.even).push(item)
      return acc
    },
    { even: [], odd: [] },
    [1, 2, 3, 4]
  )

  expect(actual).toEqual(expected)
})

it('foldRight() is curried', () => {
  const expected = '4321'
  const actual = foldRight((acc, item) => `${acc}${item}`)('')([1, 2, 3, 4])

  expect(actual).toBe(expected)
})
