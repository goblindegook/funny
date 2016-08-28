import test from 'ava'
import multiply from '../../packages/multiply'

test('multiply() supports the property of zero', t => {
  t.is(multiply(0, 3), 0)
})

test('multiply() supports the identity property', t => {
  t.is(multiply(1, 3), 3)
})

test('multiply() supports the commutative property', t => {
  t.is(multiply(2, 3), multiply(3, 2))
})

test('multiply() supports the associative property', t => {
  t.is(multiply(multiply(2, 3), 4), multiply(2, multiply(3, 4)))
})

test('multiply() supports negation', t => {
  t.is(multiply(-1, 3), -3)
})

test('multiply() is curried', t => {
  t.is(multiply(1)(3), 3)
})
