import all from '..'

describe('all', () => {
  it('returns true from an empty array', () => {
    expect(all(i => i, [])).toBe(true)
  })

  it('returns true from a list that fully satisfies the predicate', () => {
    expect(all(i => i, [true, true])).toBe(true)
  })

  it('returns false from a list that partially satisfies the predicate', () => {
    expect(all(i => i, [true, false])).toBe(false)
  })

  it('returns false from a list that never satisfies the predicate', () => {
    expect(all(i => i, [false, false])).toBe(false)
  })
})
