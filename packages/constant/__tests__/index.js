import jsc from 'jsverify'
import constant from '..'

describe('constant', () => {
  jsc.property('identity', 'unit', (a) => {
    return jsc.utils.isEqual(constant(a)(), a)
  })
})
