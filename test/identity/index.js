import test from 'ava'
import identity from '../../packages/identity'

test('identity() returns null', t => {
  const v = null
  t.is(identity(v), v)
})

test('identity() returns booleans', t => {
  const v = true
  t.is(identity(v), v)
})

test('identity() returns numbers', t => {
  const v = 0
  t.is(identity(v), v)
})

test('identity() returns strings', t => {
  const v = 'test'
  t.is(identity(v), v)
})

test('identity() returns arrays', t => {
  const v = [1, 2, 3]
  t.is(identity(v), v)
})

test('identity() returns objects', t => {
  const v = { a: 1, b: 2, c: 3 }
  t.is(identity(v), v)
})

test('identity() returns functions', t => {
  const v = i => i
  t.is(identity(v), v)
})
