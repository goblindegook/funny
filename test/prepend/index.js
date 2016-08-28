import test from 'ava'
import prepend from '../../packages/prepend'

test('prepend() inserts an item into an empty array', t => {
  t.deepEqual(prepend(1, []), [1])
})

test('prepend() inserts an array item into an empty array without flattening', t => {
  t.deepEqual(prepend([1], []), [[1]])
})

test('prepend() prepends to non-empty arrays', t => {
  t.deepEqual(prepend(2, [1]), [2, 1])
})

test('prepend() prepends array items to non-empty arrays without flattening', t => {
  t.deepEqual(prepend([2], [1]), [[2], 1])
})

test('prepend() is curried', t => {
  t.deepEqual(prepend(2)([1]), [2, 1])
})
