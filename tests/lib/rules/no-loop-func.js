/**
 * @fileoverview Do not create function within loops
 * @author Volox
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-loop-func");
const { RuleTester } = require("eslint");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const { DEFAULT_OPTIONS } = require("../utils");

const valid = [];
const invalid = [
  {
    code: "for (let i = 0; i < 5; i++) { const fn = function() {}; }",
    errors: 1
  }
];

const ruleTester = new RuleTester(DEFAULT_OPTIONS);
ruleTester.run("no-loop-func", rule, { valid, invalid });
