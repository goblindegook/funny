import chain from '..'

describe('chain', () => {
  it('does not change an empty array', () => {
    expect(chain(i => i, [])).toEqual([])
  })

  it('does not change an array if the iterated function is the identity', () => {
    expect(chain(i => i, [1, 2, 3])).toEqual([1, 2, 3])
  })

  it('flattens arrays', () => {
    expect(chain(i => [i, i], [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
  })

  it('is curried', () => {
    expect(chain(i => [i, i])([1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
  })
})
