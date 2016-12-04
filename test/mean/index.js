import test from 'ava'
import mean from '../../packages/mean'

test('mean() of an empty array is not a number', t => {
  t.is(isNaN(mean([])), true)
})

test('mean() of a single-item array', t => {
  t.is(mean([1]), 1)
})

test('mean() of a numerical array', t => {
  t.is(mean([2, 4]), 3)
})

test('mean() of a numerical array with negative numbers', t => {
  t.is(mean([-2, 2]), 0)
})
