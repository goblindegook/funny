import test from 'ava'
import remainder from '../../packages/remainder'

test('remainder of 2 and 2 is 0', t => {
  t.is(remainder(2, 2), 0)
})

test('remainder of 3 and 2 is 1', t => {
  t.is(remainder(3, 2), 1)
})

test('remainder of 8 and 3 is 2', t => {
  t.is(remainder(8, 3), 2)
})

test('remainder has the same sign as the dividend', t => {
  t.is(remainder(-3, 2), -1)
})

test('remainder is curried', t => {
  t.is(remainder(3)(2), 1)
})
