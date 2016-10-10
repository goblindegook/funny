import test from 'ava'
import difference from '../../packages/difference'

test('difference() of two empty lists returns an empty list', t => {
  t.deepEqual(difference([], []), [])
})

test('difference() of a list with an empty list returns the original list', t => {
  const list = [1, 2, 3]
  t.deepEqual(difference(list, []), list)
})

test('difference() of two lists returns elements not shared among them', t => {
  t.deepEqual(difference([1, 2], [2, 3]), [1, 3])
})

test('difference() is curried', t => {
  t.deepEqual(difference([1, 2])([2, 3]), [1, 3])
})
