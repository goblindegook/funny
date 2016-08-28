import test from 'ava'
import add from '../../packages/add'

test('add() supports the identity property', t => {
  t.is(add(0, 3), 3)
})

test('add() supports the commutative property', t => {
  t.is(add(2, 3), add(3, 2))
})

test('add() supports the associative property', t => {
  t.is(add(add(2, 3), 4), add(2, add(3, 4)))
})

test('add() is curried', t => {
  t.is(add(1)(2), 3)
})
