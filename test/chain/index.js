import test from 'ava'
import chain from '../../packages/chain'

test('chain() does not change an empty array', t => {
  t.deepEqual(chain(i => i, []), [])
})

test('chain() does not change an array if the iterated function is the identity', t => {
  t.deepEqual(chain(i => i, [1, 2, 3]), [1, 2, 3])
})

test('chain() flattens arrays', t => {
  t.deepEqual(chain(i => [i, i], [1, 2, 3]), [1, 1, 2, 2, 3, 3])
})

test('chain() is curried', t => {
  t.deepEqual(chain(i => [i, i])([1, 2, 3]), [1, 1, 2, 2, 3, 3])
})
