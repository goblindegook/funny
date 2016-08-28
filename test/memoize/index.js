import test from 'ava'
import memoize from '../../packages/memoize'

test('memoized functions return identical results', t => {
  const memoizedCeil = memoize(Math.ceil)
  t.is(memoizedCeil(0.1), Math.ceil(1))
})

test('memoized functions cache results', t => {
  const memoizedCeil = memoize(Math.ceil)
  t.is(memoizedCeil(0.21), 1)
  t.is(memoizedCeil(0.21), 1)
})

test.failing('memoized functions cache results from function arguments', t => {
  const memoizedFn = memoize((fn, arg) => fn(arg))
  t.is(memoizedFn(Math.ceil, 0.3), 1)
  t.is(memoizedFn(Math.floor, 0.3), 0)
})
