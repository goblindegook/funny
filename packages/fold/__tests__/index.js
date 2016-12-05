/* global expect it */

import fold from '..'

it('fold() passes the combine function the collection item', () => {
  const expected = '1234'
  const actual = fold((acc, item) => `${acc}${item}`, '', [1, 2, 3, 4])

  expect(actual).toEqual(expected)
})

it('fold() passes the combine function the collection index', () => {
  const expected = '0123'
  const actual = fold((acc, item, index) => `${acc}${index}`, '', [1, 2, 3, 4])

  expect(actual).toEqual(expected)
})

it('fold() passes the combine function the collection', () => {
  const expected = 16
  const actual = fold((acc, item, index, collection) => acc + collection.length, 0, [1, 2, 3, 4])

  expect(actual).toBe(expected)
})

it('fold() loops over an array, applying a combine function and initial value', () => {
  const expected = { even: [2, 4], odd: [1, 3] }
  const actual = fold(
    (acc, item) => {
      (item % 2 ? acc.odd : acc.even).push(item)
      return acc
    },
    { even: [], odd: [] },
    [1, 2, 3, 4]
  )

  expect(actual).toEqual(expected)
})

it('fold() is curried', () => {
  const expected = '1234'
  const actual = fold((acc, item) => `${acc}${item}`)('')([1, 2, 3, 4])

  expect(actual).toEqual(expected)
})
