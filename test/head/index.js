import test from 'ava'
import head from '../../packages/head'

test('head() returns the first element of an array', t => {
  t.is(head([1, 2, 3]), 1)
})

test('head() returns undefined if the array is empty', t => {
  t.is(head([]), undefined)
})
