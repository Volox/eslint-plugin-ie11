/**
 * @fileoverview Cannot use WeakMap or WeakSet (IE11 compatibility)
 * @author Volox
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-weak-collections");
const { RuleTester } = require("eslint");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const { DEFAULT_OPTIONS } = require("../utils");

const valid = [];
const invalid = [
  {
    code: "const wm = new WeakMap();",
    errors: 1
  }
];

const ruleTester = new RuleTester(DEFAULT_OPTIONS);
ruleTester.run("no-weak-collections", rule, { valid, invalid });
