import test from 'ava'
import curry from '../../packages/curry'

test('curry() returns a function', t => {
  const curriedFn = curry(i => i)
  t.is(typeof curriedFn, 'function')
})

test('curry() takes functions with arity 0', t => {
  const curriedOne = curry(() => 1)
  t.is(curriedOne(), 1)
})

test('curry() takes functions with arity n', t => {
  const curriedPow = curry(Math.pow)
  t.is(curriedPow(2, 3), 8)
  t.is(curriedPow(2)(3), 8)
})

test('curry() takes functions with arity n plus arguments', t => {
  const curriedPow = curry(Math.pow, 2)
  t.is(curriedPow(3), 8)
})

test('curry() takes functions of unspecified arity', t => {
  const curriedMax = curry(Math.max)
  t.is(curriedMax(1, 2, 3), 3)
  t.is(curriedMax(1)(2, 3), 3)
})
