import sum from '..'

describe('sum', () => {
  it('returns 0 for an empty list', () => {
    expect(sum([])).toBe(0)
  })

  it('returns the item for single-item list ', () => {
    expect(sum([1])).toBe(1)
  })

  it('adds all the numbers', () => {
    expect(sum([1, 2, 3, 4])).toBe(10)
  })
})
