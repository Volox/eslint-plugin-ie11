/**
 * @fileoverview Do not use const in for in (IE11 compatibility)
 * @author Volox
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-for-in-const");
const { RuleTester } = require("eslint");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const { DEFAULT_OPTIONS } = require("../utils");

const valid = [];
const invalid = [
  {
    code: "for( const a in { obj: 1 } ) { /* do stuff */ }",
    errors: 1
  }
];

const ruleTester = new RuleTester(DEFAULT_OPTIONS);
ruleTester.run("no-for-in-const", rule, { valid, invalid });
