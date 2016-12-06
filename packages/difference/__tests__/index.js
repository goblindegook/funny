import difference from '..'

describe('difference', () => {
  it('returns an empty list from two empty lists', () => {
    expect(difference([], [])).toEqual([])
  })

  it('returns the original list from a list and an empty list', () => {
    const list = [1, 2, 3]
    expect(difference(list, [])).toEqual(list)
  })

  it('returns elements not shared among two lists', () => {
    expect(difference([1, 2], [2, 3])).toEqual([1, 3])
  })

  it('is curried', () => {
    expect(difference([1, 2])([2, 3])).toEqual([1, 3])
  })
})
