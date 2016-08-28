# sequence

Simple modules for functional programming, done for fun.

## Usage

```javascript
import sequence from 'funny-sequence'

const greatestRoundedUp = sequence(Math.ceil, Math.max)

greatestRoundedUp(1.2, 2.3, 3.4) // 4
```

## License

The MIT License (MIT). Copyright (c) 2016 Luís Rodrigues.
