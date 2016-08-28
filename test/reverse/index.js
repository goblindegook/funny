import test from 'ava'
import reverse from '../../packages/reverse'

test('reverse() does not change an empty array', t => {
  t.deepEqual(reverse([]), [])
})

test('reverse() does not change a single item array', t => {
  t.deepEqual(reverse([0]), [0])
})

test('reverse() reverses the order of an array', t => {
  t.deepEqual(reverse([0, 1, 2]), [2, 1, 0])
})
