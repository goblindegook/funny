import jsc from 'jsverify'
import apply from '..'

describe('apply', () => {
  jsc.property('invocation', 'fn', 'array', (f, a) => {
    return jsc.utils.isEqual(apply(f, a), f(...a))
  })

  jsc.property('curry', 'fn', 'array', (f, a) => {
    return jsc.utils.isEqual(apply(f)(a), apply(f, a))
  })
})
