# eslint-plugin-ie11

ESLint plugin for detecting unsupported ES6 features in IE11

[![Build Status](https://travis-ci.org/Volox/esint-plugin-ie11.svg?branch=master)](https://travis-ci.org/Volox/esint-plugin-ie11)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-ie11`:

```
$ npm install eslint-plugin-ie11 --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-ie11` globally.

## Usage

Add `ie11` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "ie11"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "ie11/no-array-from": [ "error" ],
        "ie11/no-collection-args": [ "error" ],
        "ie11/no-for-in-const": [ "error" ],
        "ie11/no-loop-func": [ "warn" ],
        "ie11/no-weak-collections": [ "error" ]
    }
}
```

## Supported Rules

* no-array-from: Array.from is not implemented
* no-collection-args: Map and Set constructors does not accept arguments.
* no-for-in-const: Do not use const in for-in.
* no-loop-func: So not create functions inside loops.
* no-weak-collections: Do not use Weak collections