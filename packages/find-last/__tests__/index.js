import findLast from '..'

describe('findLast', () => {
  it('returns undefined on an empty array', () => {
    expect(findLast(x => true, [])).toBe(undefined)
  })

  it('returns undefined when no elements satisfy the predicate', () => {
    expect(findLast(x => false, [1, 2, 3])).toBe(undefined)
  })

  it('finds the last element that satisfies the predicate using element', () => {
    expect(findLast(e => e === 1, [1, 2, 3])).toBe(1)
  })

  it('finds the last element that satisfies the predicate using index', () => {
    expect(findLast((e, i) => i === 1, [1, 2, 3])).toBe(2)
  })

  it('finds the last element that satisfies the predicate using list', () => {
    expect(findLast((e, i, l) => e === l[1], [1, 2, 3])).toBe(2)
  })

  it('is curried', () => {
    expect(findLast(x => x === 1)([1, 2, 3])).toEqual(1)
  })
})
