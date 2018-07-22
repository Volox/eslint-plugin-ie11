/**
 * @fileoverview Array.from is not supported
 * @author Morgan Roderick
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-array-from");
const { RuleTester } = require("eslint");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const { DEFAULT_OPTIONS } = require("../utils");

const valid = [];
const invalid = [
  {
    code: "function hello(){ const args = Array.from(arguments); }",
    errors: [
      {
        message: "Array.from is not implemented (IE11 compatibility)"
      }
    ]
  }
];

const ruleTester = new RuleTester(DEFAULT_OPTIONS);
ruleTester.run("no-array-from", rule, { valid, invalid });
