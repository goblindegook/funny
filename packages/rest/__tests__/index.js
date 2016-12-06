import rest from '..'

describe('rest', () => {
  it('returns the rest of an array', () => {
    expect(rest([1, 2, 3])).toEqual([2, 3])
  })

  it('returns an empty array if the array is empty', () => {
    expect(rest([])).toEqual([])
  })
})
