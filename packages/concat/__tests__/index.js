import jsc from 'jsverify'
import concat from '..'

describe('concat', () => {
  it('joins arrays and items', () => {
    expect(concat([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
  })

  it('joins n elements', () => {
    expect(concat([1], 2, [3], 4)).toEqual([1, 2, 3, 4])
  })

  jsc.property('combined length', 'array', 'array', (a, b) => {
    const r = concat(a, b)
    return r.length === a.length + b.length
  })

  jsc.property('original array at the start', 'array', 'array', (a, b) => {
    const r = concat(a, b)
    return jsc.utils.isEqual(r.slice(0, a.length), a)
  })

  jsc.property('concatenated array at the end', 'array', 'array', (a, b) => {
    const r = concat(a, b)
    return jsc.utils.isEqual(r.slice(a.length), b)
  })

  jsc.property('curry', 'array', 'array', (a, b) => {
    return jsc.utils.isEqual(concat(a)(b), concat(a, b))
  })
})
