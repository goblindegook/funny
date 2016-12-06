import append from '..'

describe('append', () => {
  it('inserts an item into an empty array', () => {
    expect(append(1, [])).toEqual([1])
  })

  it('inserts an array item into an empty array without flattening', () => {
    expect(append([1], [])).toEqual([[1]])
  })

  it('appends to non-empty arrays', () => {
    expect(append(2, [1])).toEqual([1, 2])
  })

  it('appends array items to non-empty arrays without flattening', () => {
    expect(append([2], [1])).toEqual([1, [2]])
  })

  it('is curried', () => {
    expect(append(2)([1])).toEqual([1, 2])
  })
})
