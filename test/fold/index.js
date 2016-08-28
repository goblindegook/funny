import test from 'ava'
import fold from '../../packages/fold'

test('fold() passes the combine function the collection item', t => {
  const expected = '1234'
  const actual = fold((acc, item) => `${acc}${item}`, '', [1, 2, 3, 4])

  t.deepEqual(actual, expected)
})

test('fold() passes the combine function the collection index', t => {
  const expected = '0123'
  const actual = fold((acc, item, index) => `${acc}${index}`, '', [1, 2, 3, 4])

  t.deepEqual(actual, expected)
})

test('fold() passes the combine function the collection', t => {
  const expected = 16
  const actual = fold((acc, item, index, collection) => acc + collection.length, 0, [1, 2, 3, 4])

  t.is(actual, expected)
})

test('fold() loops over an array, applying a combine function and initial value', t => {
  const expected = { even: [2, 4], odd: [1, 3] }
  const actual = fold(
    (acc, item) => {
      (item % 2 ? acc.odd : acc.even).push(item)
      return acc
    },
    { even: [], odd: [] },
    [1, 2, 3, 4]
  )

  t.deepEqual(actual, expected)
})

test('fold() is curried', t => {
  const expected = '1234'
  const actual = fold((acc, item) => `${acc}${item}`)('')([1, 2, 3, 4])

  t.deepEqual(actual, expected)
})
