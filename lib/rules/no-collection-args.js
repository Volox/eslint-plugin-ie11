/**
 * @fileoverview Map and Set does not support constructor arguments
 * @author Volox
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------


module.exports = {
    meta: {
        docs: {
            description: "Map and Set does not support constructor arguments",
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
					'NewExpression[callee.name=/^(Map|Set)$/][arguments.length>0]': function( node ) {
						context.report(node.arguments[0], 'Map and Set does not accept arguments (IE11 compatibility)');
					}
        };
    }
};
