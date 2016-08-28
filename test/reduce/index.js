import test from 'ava'
import reduce from '../../packages/reduce'

test('reduce() applies a combine function with the correct items', t => {
  const expected = '1234'
  const actual = reduce((acc, item) => `${acc}${item}`, [1, 2, 3, 4])

  t.is(actual, expected)
})

test('reduce() applies a combine function with the correct items', t => {
  const expected = '1234'
  const actual = reduce((acc, item, index) => `${acc}${item}`, [1, 2, 3, 4])

  t.is(actual, expected)
})

test('reduce() passes the combine function the collection index', t => {
  const expected = '1123'
  const actual = reduce((acc, item, index) => `${acc}${index}`, [1, 2, 3, 4])

  t.deepEqual(actual, expected)
})

test('reduce() is curried', t => {
  const expected = '1234'
  const actual = reduce((acc, item) => `${acc}${item}`)([1, 2, 3, 4])

  t.is(actual, expected)
})
