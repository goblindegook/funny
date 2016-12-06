import head from '..'

describe('head', () => {
  it('returns the first element of an array', () => {
    expect(head([1, 2, 3])).toBe(1)
  })

  it('returns undefined if the array is empty', () => {
    expect(head([])).toBe(undefined)
  })
})
