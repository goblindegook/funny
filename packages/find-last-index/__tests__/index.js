import findLastIndex from '..'

describe('findLastIndex', () => {
  it('returns -1 on an empty list', () => {
    expect(findLastIndex(x => true, [])).toBe(-1)
  })

  it('returns -1 when no elements satisfy the predicate', () => {
    expect(findLastIndex(x => false, [1, 2, 3])).toBe(-1)
  })

  it('finds the last element that satisfies the predicate using element', () => {
    expect(findLastIndex(e => e === 1, [1, 2, 1])).toBe(2)
  })

  it('finds the last element that satisfies the predicate using index', () => {
    expect(findLastIndex((e, i) => i === 1, [1, 2, 1])).toBe(1)
  })

  it('finds the last element that satisfies the predicate using list', () => {
    expect(findLastIndex((e, i, l) => e === l[1], [1, 2, 1])).toBe(1)
  })

  it('is curried', () => {
    expect(findLastIndex(x => x === 1)([1, 2, 1])).toBe(2)
  })
})
