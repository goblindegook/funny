import test from 'ava'
import repeat from '../../packages/repeat'

test('repeat() returns an empty array on 0', t => {
  t.deepEqual(repeat('fun', 0), [])
})

test('repeat() returns a single item array on 1', t => {
  t.deepEqual(repeat('fun', 1), ['fun'])
})

test('repeat() returns arrays with n items', t => {
  t.deepEqual(repeat('fun', 2), ['fun', 'fun'])
})

test('repeat() returns arrays with n objects', t => {
  const obj = { fun: 'fun' }
  t.deepEqual(repeat(obj, 2), [obj, obj])
})

test('repeat() does not flatten list items', t => {
  const list = [1]
  t.deepEqual(repeat(list, 2), [list, list])
})

test('repeat() is curried', t => {
  t.deepEqual(repeat('fun')(2), ['fun', 'fun'])
})
