import test from 'ava'
import append from '../../packages/append'

test('append() inserts an item into an empty array', t => {
  t.deepEqual(append(1, []), [1])
})

test('append() inserts an array item into an empty array without flattening', t => {
  t.deepEqual(append([1], []), [[1]])
})

test('append() appends to non-empty arrays', t => {
  t.deepEqual(append(2, [1]), [1, 2])
})

test('append() appends array items to non-empty arrays without flattening', t => {
  t.deepEqual(append([2], [1]), [1, [2]])
})

test('append() is curried', t => {
  t.deepEqual(append(2)([1]), [1, 2])
})
