import test from 'ava'
import curryN from '../../packages/curry-n'

test('curryN() returns a function', t => {
  const curriedFn = curryN(i => i)
  t.is(typeof curriedFn, 'function')
})

test('curryN() takes functions with arity 0', t => {
  const curriedOne = curryN(0, () => 1)
  t.is(curriedOne(), 1)
})

test('curryN() takes functions with arity 2', t => {
  const curriedPow = curryN(2, Math.pow)
  t.is(curriedPow(2, 3), 8)
  t.is(curriedPow(2)(3), 8)
})

test('curryN() takes functions with arity 2 plus arguments', t => {
  const curriedPow = curryN(2, Math.pow, 2)
  t.is(curriedPow(3), 8)
})

test('curryN() takes functions with custom arity', t => {
  const curriedMax = curryN(3, Math.max)
  t.is(curriedMax(1, 2, 3), 3)
  t.is(curriedMax(1, 2)(3), 3)
  t.is(curriedMax(1)(2, 3), 3)
  t.is(curriedMax(1)(2)(3), 3)
})
