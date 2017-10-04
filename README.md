# eslint-plugin-ie11

ESLint plugin for detecting unsupported ES6 features in IE11

[![Build Status](https://travis-ci.org/Volox/esint-plugin-ie11.svg?branch=master)](https://travis-ci.org/Volox/esint-plugin-ie11)

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
        "ie11/rule-name": [ "error" ]
    }
}
```

## Supported Rules

* no-collection-args: 
* no-for-in-const: 
* no-loop-func: 
* no-weak-collections: 