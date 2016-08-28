import test from 'ava'
import sort from '../../packages/sort'

const comparator = (a, b) => a - b

test('sort() returns an empty array', t => {
  t.deepEqual(sort(comparator, []), [])
})

test('sort() returns a single item array', t => {
  t.deepEqual(sort(comparator, [1]), [1])
})

test('sort() returns a previously sorted array', t => {
  t.deepEqual(sort(comparator, [1, 2, 3]), [1, 2, 3])
})

test('sort() sorts an array', t => {
  t.deepEqual(sort(comparator, [3, 2, 1]), [1, 2, 3])
})

test('sort() is curried', t => {
  t.deepEqual(sort(comparator)([3, 2, 1]), [1, 2, 3])
})
