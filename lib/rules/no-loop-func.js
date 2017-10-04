/**
 * @fileoverview Do not create function within loops
 * @author Volox
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Do not create function within loops",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

					':statement:matches(WhileStatement,DoWhileStatement,ForStatement,ForInStatement,ForOfStatement) :function': function (node) {
						context.report(node, 'Do not create function within loops (IE11 compatibility)');
					}

        };
    }
};
