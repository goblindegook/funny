import test from 'ava'
import constant from '../../packages/constant'

test('constant() returns a function', t => {
  const fn = constant()
  t.is(typeof fn, 'function')
})

test('constant() returns a function that always returns null', t => {
  const value = null
  const always = constant(value)
  t.is(always(), value)
})

test('constant() returns a function that always returns a boolean', t => {
  const value = true
  const always = constant(value)
  t.is(always(), value)
})

test('constant() returns a function that always returns a number', t => {
  const value = 1
  const always = constant(value)
  t.is(always(), value)
})

test('constant() returns a function that always returns a string', t => {
  const value = 'test'
  const always = constant(value)
  t.is(always(), value)
})

test('constant() returns a function that always returns an array', t => {
  const value = [1, 2, 3]
  const always = constant(value)
  t.is(always(), value)
})

test('constant() returns a function that always returns an object', t => {
  const value = {a: 1, b: 2, c: 3}
  const always = constant(value)
  t.is(always(), value)
})

test('constant() returns a function that always returns a function', t => {
  const value = i => i
  const always = constant(value)
  t.is(always(), value)
})
