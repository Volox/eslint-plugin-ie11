# Do not use const in for in (IE11 compatibility) (no-for-in-const)

Avoid using `const` in for-in loops.


## Rule Details

This rule aims to avoid IE11 error.

Examples of **incorrect** code for this rule:

```js
for( const key in { a: 1, b: 2 } ) {
	// ...code here
}
```

Examples of **correct** code for this rule:

```js
for( let key in { a: 1, b: 2 } ) {
	// ...code here
}
```

## When Not To Use It

IE11 raise an error if cont is used in a for-in so there is no good use case.

## Further Reading

http://kangax.github.io/compat-table/es6/#test-const_for-in_loop_iteration_scope
