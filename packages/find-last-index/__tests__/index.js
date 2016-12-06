import findLastIndex from '..'

describe('findLastIndex', () => {
  it('returns -1 on an empty list', () => {
    expect(findLastIndex(x => true, [])).toBe(-1)
  })

  it('returns -1 when no elements satisfy the predicate', () => {
    expect(findLastIndex(x => false, [1, 2, 3])).toBe(-1)
  })

  it('returns the first element that satisfies the predicate', () => {
    expect(findLastIndex(x => x === 1, [1, 2, 1])).toBe(2)
  })

  it('is curried', () => {
    expect(findLastIndex(x => x === 1)([1, 2, 1])).toBe(2)
  })
})
