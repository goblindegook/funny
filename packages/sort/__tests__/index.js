import sort from '..'

const comparator = (a, b) => a - b

describe('sort', () => {
  it('returns an empty array', () => {
    expect(sort(comparator, [])).toEqual([])
  })

  it('returns a single item array', () => {
    expect(sort(comparator, [1])).toEqual([1])
  })

  it('returns a previously sorted array unchanged', () => {
    expect(sort(comparator, [1, 2, 3])).toEqual([1, 2, 3])
  })

  it('sorts an array', () => {
    expect(sort(comparator, [3, 2, 1])).toEqual([1, 2, 3])
  })

  it('is curried', () => {
    expect(sort(comparator)([3, 2, 1])).toEqual([1, 2, 3])
  })
})
