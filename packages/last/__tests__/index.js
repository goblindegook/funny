import last from '..'

describe('last', () => {
  it('returns the last element of a list', () => {
    expect(last([1, 2, 3])).toBe(3)
  })

  it('returns undefined if the list is empty', () => {
    expect(last([])).toBe(undefined)
  })
})
