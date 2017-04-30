import findIndex from '..'

describe('findIndex', () => {
  it('returns -1 on an empty array', () => {
    expect(findIndex(e => true, [])).toBe(-1)
  })

  it('returns -1 when no elements satisfy the predicate', () => {
    expect(findIndex(e => false, [1, 2, 3])).toBe(-1)
  })

  it('finds the first element that satisfies the predicate using element', () => {
    expect(findIndex(e => e === 1, [1, 2, 1])).toBe(0)
  })

  it('finds the first element that satisfies the predicate using index', () => {
    expect(findIndex((e, i) => i === 1, [1, 2, 1])).toBe(1)
  })

  it('finds the first element that satisfies the predicate using list', () => {
    expect(findIndex((e, i, l) => e === l[1], [1, 2, 1])).toBe(1)
  })

  it('is curried', () => {
    expect(findIndex(e => e === 1)([1, 2, 1])).toBe(0)
  })
})
