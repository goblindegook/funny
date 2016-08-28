import test from 'ava'
import flatten from '../../packages/flatten'

test('flatten() always returns an array', t => {
  t.deepEqual(flatten(1), [])
})

test('flatten() does not change a flattened array', t => {
  t.deepEqual(flatten([1, 2]), [1, 2])
})

test('flatten() flattens with arrays at the start', t => {
  t.deepEqual(flatten([[1, 2], 3]), [1, 2, 3])
})

test('flatten() flattens with arrays at the end', t => {
  t.deepEqual(flatten([1, [2, 3]]), [1, 2, 3])
})
