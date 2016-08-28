import test from 'ava'
import divide from '../../packages/divide'

test('divide() supports the property of zero', t => {
  t.is(divide(0, 2), 0)
})

test('divide() supports floating point results', t => {
  t.is(divide(1, 2), 0.5)
})

test('divide() supports negation', t => {
  t.is(divide(-1, 2), -0.5)
})

test('divide() is curried', t => {
  t.is(divide(1)(2), 0.5)
})
