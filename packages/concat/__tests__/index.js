import concat from '..'

describe('concat', () => {
  it('joins empty arrays into an empty array', () => {
    expect(concat([], [])).toEqual([])
  })

  it('joins arrays', () => {
    expect(concat([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
  })

  it('joins arrays and items', () => {
    expect(concat([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
  })

  it('takes n arguments', () => {
    expect(concat([1], 2, [3], 4)).toEqual([1, 2, 3, 4])
  })

  it('is curried', () => {
    expect(concat([1])([2])).toEqual([1, 2])
  })
})
