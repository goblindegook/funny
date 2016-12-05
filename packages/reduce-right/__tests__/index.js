/* global expect it */

import reduceRight from '..'

it('reduceRight() applies a combine function with the correct items', () => {
  const expected = '4321'
  const actual = reduceRight((acc, item, index) => `${acc}${item}`, [1, 2, 3, 4])

  expect(actual).toBe(expected)
})

it('reduceRight() applies a combine function with the correct items', () => {
  const expected = '4321'
  const actual = reduceRight((acc, item, index) => `${acc}${item}`, [1, 2, 3, 4])

  expect(actual).toBe(expected)
})

it('reduceRight() passes the combine function the collection index', () => {
  const expected = '4210'
  const actual = reduceRight((acc, item, index) => `${acc}${index}`, [1, 2, 3, 4])

  expect(actual).toEqual(expected)
})

it('reduceRight() is curried', () => {
  const expected = '4321'
  const actual = reduceRight((acc, item, index) => `${acc}${item}`)([1, 2, 3, 4])

  expect(actual).toBe(expected)
})
