import find from '..'

describe('find', () => {
  it('returns undefined on an empty array', () => {
    expect(find(x => true, [])).toBe(undefined)
  })

  it('returns undefined when no elements satisfy the predicate', () => {
    expect(find(x => false, [1, 2, 3])).toBe(undefined)
  })

  it('finds the first element that satisfies the predicate using element', () => {
    expect(find(e => e === 1, [1, 2, 1])).toBe(1)
  })

  it('finds the first element that satisfies the predicate using index', () => {
    expect(find((e, i) => i === 1, [1, 2, 1])).toBe(2)
  })

  it('finds the first element that satisfies the predicate using list', () => {
    expect(find((e, i, l) => e === l[1], [1, 2, 1])).toBe(2)
  })

  it('is curried', () => {
    expect(find(x => x === 1)([1, 2, 3])).toBe(1)
  })
})
