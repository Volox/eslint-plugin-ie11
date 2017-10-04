# Do not create function within loops (no-loop-func)

`let` and `const` are not behaving correctly in loop iteration scope.

## Rule Details

This rule aims to avoid common errors when using function within loops.

Examples of **incorrect** code for this rule:

```js
const scopes = [];
for (let i = 0; i < 5; i++) {
  scopes.push( function() { return i; } );
}
const zero = scopes[0]();
const one = scopes[1]();
```

Examples of **correct** code for this rule:

```js
// Since is basically a refactor of the code,
// there is no point of having a correct code.
// .. anyway :)

const wrapScope = function( value ) {
	return function() { return value ; };
};
const scopes = [];
for (let i = 0; i < 5; i++) {
  scopes.push( wrapScope(i) );
}
const zero = scopes[0]();
const one = scopes[1]();
```

## When Not To Use It

If you are brave.

## Further Reading

`let` in for/for-in support: http://kangax.github.io/compat-table/es6/#test-let_for/for-in_loop_iteration_scope
`const` in for/for-in support: http://kangax.github.io/compat-table/es6/#test-let_for/for-in_loop_iteration_scope