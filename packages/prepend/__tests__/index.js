import prepend from '..'

describe('prepend', () => {
  it('inserts an item into an empty array', () => {
    expect(prepend(1, [])).toEqual([1])
  })

  it('inserts an array item into an empty array without flattening', () => {
    expect(prepend([1], [])).toEqual([[1]])
  })

  it('prepends to non-empty arrays', () => {
    expect(prepend(2, [1])).toEqual([2, 1])
  })

  it('prepends array items to non-empty arrays without flattening', () => {
    expect(prepend([2], [1])).toEqual([[2], 1])
  })

  it('is curried', () => {
    expect(prepend(2)([1])).toEqual([2, 1])
  })
})
