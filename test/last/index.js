import test from 'ava'
import last from '../../packages/last'

test('last() returns the last element of an array', t => {
  t.is(last([1, 2, 3]), 3)
})

test('last() returns undefined if the array is empty', t => {
  t.is(last([]), undefined)
})
