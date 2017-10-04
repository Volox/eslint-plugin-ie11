/**
 * @fileoverview ESLint plugin for detecting unsupported ES6 features in IE11
 * @author Volox
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// Import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");
