import jsc from 'jsverify'
import add from '..'

describe('add', () => {
  jsc.property('identity', 'number', (n) => {
    return add(0, n) === n
  })

  jsc.property('commutative', 'number', 'number', (m, n) => {
    return add(m, n) === add(n, m)
  })

  jsc.property('associative', 'number', 'number', 'number', (m, n, o) => {
    return add(m, add(n, o)) === add(add(m, n), o)
  })

  jsc.property('curry', 'number', 'number', (m, n) => {
    return add(m)(n) === add(m, n)
  })
})
