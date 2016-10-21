import test from 'ava'
import intersection from '../../packages/intersection'

test('intersection() of two empty lists returns an empty list', t => {
  t.deepEqual(intersection([], []), [])
})

test('intersection() of a list with an empty list returns an empty list', t => {
  t.deepEqual(intersection([1, 2, 3], []), [])
})

test('intersection() of two lists returns elements shared among them', t => {
  t.deepEqual(intersection([1, 2, 3], [2, 3, 4]), [2, 3])
})

test('intersection() of two lists returns elements shared among them in order', t => {
  t.deepEqual(intersection([1, 2, 3], [4, 3, 2]), [3, 2])
})

test('intersection() of two lists returns elements shared among them with no duplicates', t => {
  t.deepEqual(intersection([1, 2, 2], [2, 2, 3]), [2])
})

test('intersection() is curried', t => {
  t.deepEqual(intersection([1, 2])([2, 3]), [2])
})
