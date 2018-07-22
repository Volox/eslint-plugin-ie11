/**
 * @fileoverview Map and Set does not support constructor arguments
 * @author Morgan Roderick
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------


module.exports = {
    meta: {
        docs: {
            description: "Array.from is not implemented",
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
            'CallExpression[callee.object.name=Array][callee.property.name=from]': function( node ) {
                context.report(node, 'Array.from is not implemented (IE11 compatibility)');
            }
        };
    }
};
