# Cannot use WeakMap or WeakSet (IE11 compatibility) (no-weak-collections)

WeakMap and WeakSet are poorly supported in IE11.


## Rule Details

This rule aims to aviod usage of those built-in collections.

Examples of **incorrect** code for this rule:

```js
const map = new WeakMap();
const set = new WeakSet();
```

Examples of **correct** code for this rule:

```js
const map = new Map();
const set = new Set();
```

## When Not To Use It

If you care supporting `WeakMap` in your code.

## Further Reading

WeakMap support: http://kangax.github.io/compat-table/es6/#test-WeakMap
WeakSet support: http://kangax.github.io/compat-table/es6/#test-WeakSet

