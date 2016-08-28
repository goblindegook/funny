import test from 'ava'
import subtract from '../../packages/subtract'

test('subtract() returns zero on identical arguments', t => {
  t.is(subtract(3, 3), 0)
})

test('subtract() returns negative results', t => {
  t.is(subtract(1, 3), -2)
})

test('subtract() supports negation', t => {
  t.is(subtract(1, -3), 4)
})

test('subtract() is curried', t => {
  t.is(subtract(3)(2), 1)
})
