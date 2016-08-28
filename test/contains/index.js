import test from 'ava'
import contains from '../../packages/contains'

test('contains() is false when element does not exist in array', t => {
  t.is(contains(4, [1, 2, 3]), false)
})

test('contains() is true when element exists in array', t => {
  t.is(contains(1, [1, 2, 3]), true)
})

test.failing('contains() is true when object exists in array', t => {
  t.is(contains([1], [[1], [2], [3]]), true)
})
