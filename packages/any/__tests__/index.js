import any from '..'

describe('any', () => {
  it('returns false from an empty list', () => {
    expect(any(i => i, [])).toBe(false)
  })

  it('returns true from a list that fully satisfies the predicate', () => {
    expect(any(i => i, [true, true])).toBe(true)
  })

  it('returns true from a list that partially satisfies the predicate', () => {
    expect(any(i => i, [true, false])).toBe(true)
  })

  it('returns false from a list that never satisfies the predicate', () => {
    expect(any(i => i, [false, false])).toBe(false)
  })

  it('is curried', () => {
    expect(any(i => i)([true, false])).toBe(true)
  })
})
