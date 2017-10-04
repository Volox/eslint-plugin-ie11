/**
 * @fileoverview Map and Set does not support constructor arguments
 * @author Volox
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-collection-args");
const { RuleTester } = require("eslint");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const { DEFAULT_OPTIONS } = require("../utils");

const valid = [];
const invalid = [
  {
    code: "const map = new Map(1);",
    errors: [
      {
        message: "Map and Set does not accept arguments (IE11 compatibility)"
      }
    ]
  }
];

const ruleTester = new RuleTester(DEFAULT_OPTIONS);
ruleTester.run("no-collection-args", rule, { valid, invalid });
