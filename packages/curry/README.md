# curry

Simple modules for functional programming, done for fun.

## Usage

```javascript
import curry from 'funny-curry'

const exponentBase2 = curry(Math.pow, 2)
exponentBase2(3) // 8

const exponent = curry(Math.pow)
exponent(2, 3)   // 8
exponent(2)(3)   // 8
```

## License

The MIT License (MIT). Copyright (c) 2016 Luís Rodrigues.
