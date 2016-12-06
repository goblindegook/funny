import findIndex from '..'

describe('findIndex', () => {
  it('returns -1 on an empty array', () => {
    expect(findIndex(x => true, [])).toBe(-1)
  })

  it('returns -1 when no elements satisfy the predicate', () => {
    expect(findIndex(x => false, [1, 2, 3])).toBe(-1)
  })

  it('finds the first element that satisfies the predicate', () => {
    expect(findIndex(x => x === 1, [1, 2, 1])).toBe(0)
  })

  it('is curried', () => {
    expect(findIndex(x => x === 1)([1, 2, 1])).toBe(0)
  })
})
