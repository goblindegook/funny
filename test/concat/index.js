import test from 'ava'
import concat from '../../packages/concat'

test('concat() joins empty arrays into an empty array', t => {
  t.deepEqual(concat([], []), [])
})

test('concat() joins arrays', t => {
  t.deepEqual(concat([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4, 5, 6])
})

test('concat() joins arrays and items', t => {
  t.deepEqual(concat([1, 2, 3], 4), [1, 2, 3, 4])
})

test('concat() takes n arguments', t => {
  t.deepEqual(concat([1], 2, [3], 4), [1, 2, 3, 4])
})

test('concat() is curried', t => {
  t.deepEqual(concat([1])([2]), [1, 2])
})
