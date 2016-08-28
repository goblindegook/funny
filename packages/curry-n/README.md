# curryN

Simple modules for functional programming, done for fun.

## Usage

```javascript
import curryN from 'funny-curry-n'

const max3 = curryN(3, Math.max)
max3(1, 2, 3)
max3(1, 2)(3)
max3(1)(2, 3)
max3(1)(2)(3)
```

## License

The MIT License (MIT). Copyright (c) 2016 Luís Rodrigues.
