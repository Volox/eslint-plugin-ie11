/**
 * @fileoverview Do not use const in for in (IE11 compatibility)
 * @author Volox
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Do not use const in for in (IE11 compatibility)",
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

					'ForInStatement > VariableDeclaration[kind="const"]': function( constNode ) {
						context.report(constNode, 'Do not use const in for in (IE11 compatibility)');
					}

        };
    }
};
