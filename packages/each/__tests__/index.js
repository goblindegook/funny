import each from '..'

describe('each', () => {
  it('loops over an array, applying a function', () => {
    let all = []
    each(item => all.push(item), [1, 2, 3, 4])
    expect(all).toEqual([1, 2, 3, 4])
  })

  it('passes the function the item index', () => {
    let all = []
    each((item, index) => all.push(index), [1, 2, 3, 4])
    expect(all).toEqual([0, 1, 2, 3])
  })

  it('passes the function the collection', () => {
    let all = []
    each((item, index, collection) => all.push(collection.length), [1, 2, 3, 4])
    expect(all).toEqual([4, 4, 4, 4])
  })

  it('is curried', () => {
    let all = []
    each(item => all.push(item))([1, 2, 3, 4])
    expect(all).toEqual([1, 2, 3, 4])
  })
})
