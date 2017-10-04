# Map and Set does not support constructor arguments (no-collection-args)

IE11 does not support arguments to be passed to Map and Set.


## Rule Details

This rule aims to avoid suble errors when using ES6 Map and Set in IE11.

Examples of **incorrect** code for this rule:

```js
const set = new Set([1,3]);
const map = new Map([['key1', 123], [{key2:true}, 456]]);
```

Examples of **correct** code for this rule:

```js
const set = new Set();
const map = new Map();
```

## When Not To Use It

IE11 does not support cosntructor arguments to `Map` and `Set` no suitable use-case.

## Further Reading

`Map` supported feaures: http://kangax.github.io/compat-table/es6/#test-Map_constructor_arguments
`Set` supported feaures: http://kangax.github.io/compat-table/es6/#test-Set_constructor_arguments
