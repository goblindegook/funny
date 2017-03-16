import unique from '..'

describe('unique', () => {
  it('returns an empty list unchanged', () => {
    expect(unique([])).toEqual([])
  })

  it('returns a list of unique items unchanged', () => {
    expect(unique([1, 2, 3])).toEqual([1, 2, 3])
  })

  it('returns a list with duplicates removed', () => {
    expect(unique([1, 2, 3, 1, 3])).toEqual([1, 2, 3])
  })
})
