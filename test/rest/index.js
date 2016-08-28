import test from 'ava'
import rest from '../../packages/rest'

test('rest() returns the rest of an array', t => {
  t.deepEqual(rest([1, 2, 3]), [2, 3])
})

test('rest() returns an empty array if the array is empty', t => {
  t.deepEqual(rest([]), [])
})
