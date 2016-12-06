import findLast from '..'

describe('findLast', () => {
  it('returns undefined on an empty array', () => {
    expect(findLast(x => true, [])).toBe(undefined)
  })

  it('returns undefined when no elements satisfy the predicate', () => {
    expect(findLast(x => false, [1, 2, 3])).toBe(undefined)
  })

  it('finds the first element that satisfies the predicate', () => {
    expect(findLast(x => x === 1, [1, 2, 3])).toEqual(1)
  })

  it('is curried', () => {
    expect(findLast(x => x === 1)([1, 2, 3])).toEqual(1)
  })
})
