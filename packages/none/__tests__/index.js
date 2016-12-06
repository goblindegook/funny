import none from '..'

describe('none', () => {
  it('of an empty list returns true', () => {
    expect(none(i => i, [])).toBe(true)
  })

  it('of a list that fully satisfies the predicate function returns false', () => {
    expect(none(i => i, [true, true])).toBe(false)
  })

  it('of a list that partially satisfies the predicate function returns false', () => {
    expect(none(i => i, [true, false])).toBe(false)
  })

  it('of a list that never satisfies the predicate function returns true', () => {
    expect(none(i => i, [false, false])).toBe(true)
  })
})
