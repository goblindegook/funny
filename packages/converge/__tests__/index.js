import converge from '..'
import jsc from 'jsverify'

describe('converge', () => {
  jsc.property('converges results of individual functions', 'fun', 'array fun', 'nearray',
    (fn, fns, args) => converge(fn, fns, ...args) === fn(...fns.map(f => f(...args)))
  )

  jsc.property('curry', 'fun', 'array fun', 'nearray',
    (fn, fns, args) => converge(fn)(fns)(...args) === converge(fn, fns, ...args)
  )
})
