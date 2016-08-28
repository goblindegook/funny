import test from 'ava'
import zip from '../../packages/zip'

test('zip() returns empty array', t => {
  const a = []
  const b = []
  t.deepEqual(zip(a, b), [])
})

test('zip() combines elements', t => {
  const a = [1, 2, 3]
  const b = ['a', 'b', 'c']
  t.deepEqual(zip(a, b), [[1, 'a'], [2, 'b'], [3, 'c']])
})

test('zip() creates an array only as long as the shortest input', t => {
  const a = [1, 2, 3]
  const b = ['a']
  t.deepEqual(zip(a, b), [[1, 'a']])
})

test('zip() is curried', t => {
  const a = [1, 2, 3]
  const b = ['a', 'b', 'c']
  t.deepEqual(zip(a)(b), [[1, 'a'], [2, 'b'], [3, 'c']])
})
