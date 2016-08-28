# partial

Simple modules for functional programming, done for fun.

## Usage

```javascript
import partial from 'funny-partial'

const square = partial(Math.pow, undefined, 2)

square(-2) // 4
square(0)  // 0
square(2)  // 4
```

## License

The MIT License (MIT). Copyright (c) 2016 Luís Rodrigues.
