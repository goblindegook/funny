import partition from '..'

describe('partition', () => {
  it('returns two empty arrays from an empty array', () => {
    expect(partition(x => true, [])).toEqual([[], []])
  })

  it('puts all items in the first array if always true', () => {
    expect(partition(x => true, [1, 2, 3])).toEqual([[1, 2, 3], []])
  })

  it('puts all items in the second array if always false', () => {
    expect(partition(x => false, [1, 2, 3])).toEqual([[], [1, 2, 3]])
  })

  it('splits the arrays according to the predicate', () => {
    expect(partition(x => x % 2, [1, 2, 3])).toEqual([[1, 3], [2]])
  })

  it('preserves nested array items', () => {
    expect(partition(x => x.length === 1, [[1], [2], [3, 4]])).toEqual([[[1], [2]], [[3, 4]]])
  })

  it('is curried', () => {
    expect(partition(x => x % 2)([1, 2, 3])).toEqual([[1, 3], [2]])
  })
})
