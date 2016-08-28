import test from 'ava'
import each from '../../packages/each'

test('each() loops over an array, applying a function', t => {
  let all = []
  each(item => all.push(item), [1, 2, 3, 4])
  t.deepEqual(all, [1, 2, 3, 4])
})

test('each() passes the function the item index', t => {
  let all = []
  each((item, index) => all.push(index), [1, 2, 3, 4])
  t.deepEqual(all, [0, 1, 2, 3])
})

test('each() passes the function the collection', t => {
  let all = []
  each((item, index, collection) => all.push(collection.length), [1, 2, 3, 4])
  t.deepEqual(all, [4, 4, 4, 4])
})

test('each() is curried', t => {
  let all = []
  each(item => all.push(item))([1, 2, 3, 4])
  t.deepEqual(all, [1, 2, 3, 4])
})
