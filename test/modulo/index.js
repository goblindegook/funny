import test from 'ava'
import modulo from '../../packages/modulo'

test('modulo of 2 and 2 is 0', t => {
  t.is(modulo(2, 2), 0)
})

test('modulo of 3 and 2 is 1', t => {
  t.is(modulo(3, 2), 1)
})

test('modulo is positive', t => {
  t.true(modulo(-4, 3) > 0)
})

test('modulo of 3 and 0 is not a number', t => {
  t.true(isNaN(modulo(3, 0)))
})

test('modulo of non-integer numbers is not a number', t => {
  t.true(isNaN(modulo(3.5, 2)))
})

test('modulo is curried', t => {
  t.is(modulo(3)(2), 1)
})
