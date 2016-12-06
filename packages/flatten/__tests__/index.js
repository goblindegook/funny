import flatten from '..'

describe('flatten', () => {
  it('always returns an array', () => {
    expect(flatten(1)).toEqual([])
  })

  it('does not change a flattened array', () => {
    expect(flatten([1, 2])).toEqual([1, 2])
  })

  it('flattens with arrays at the start', () => {
    expect(flatten([[1, 2], 3])).toEqual([1, 2, 3])
  })

  it('flattens with arrays at the end', () => {
    expect(flatten([1, [2, 3]])).toEqual([1, 2, 3])
  })
})
