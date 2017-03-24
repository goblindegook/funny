import jsc from 'jsverify'
import compose from '..'

describe('compose', () => {
  jsc.property('identity', 'fn', 'array', (fn, args) => {
    return jsc.utils.isEqual(compose(fn)(...args), fn(...args))
  })

  jsc.property('composition', 'fn', 'fn', 'array', (f, g, args) => {
    return jsc.utils.isEqual(compose(f, g)(...args), f(g(...args)))
  })
})
