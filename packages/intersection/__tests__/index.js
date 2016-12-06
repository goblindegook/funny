import intersection from '..'

describe('intersection', () => {
  it('returns an empty list from two empty lists', () => {
    expect(intersection([], [])).toEqual([])
  })

  it('returns an empty list from a list and an empty list', () => {
    expect(intersection([1, 2, 3], [])).toEqual([])
  })

  it('returns elements shared among two lists', () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3])
  })

  it('returns elements shared among two lists in order', () => {
    expect(intersection([1, 2, 3], [4, 3, 2])).toEqual([3, 2])
  })

  it('returns elements shared among two lists with no duplicates', () => {
    expect(intersection([1, 2, 2], [2, 2, 3])).toEqual([2])
  })

  it('is curried', () => {
    expect(intersection([1, 2])([2, 3])).toEqual([2])
  })
})

