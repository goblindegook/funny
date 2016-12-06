import same from '..'

describe('same', () => {
  it('returns true when values are the same', () => {
    expect(same(1, 1)).toBe(true)
  })

  it('returns true when references are the same', () => {
    const a = [1]
    const b = a
    expect(same(a, b)).toBe(true)
  })

  it('returns false when values are different', () => {
    expect(same(1, 2)).toBe(false)
  })

  it('returns false when references are different', () => {
    expect(same([1], [1])).toBe(false)
  })
})
