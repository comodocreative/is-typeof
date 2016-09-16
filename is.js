/**
 * is-TypeOf (is.js) | JavaScript type checking
 *
 * I used a Universal Module Definition (UMD) wrapper for this plugins. 
 * This wrapper means that the scripts are compatibile with both AMD and 
 * CommonJS, and also work as a traditional module pattern.
 * 
 */
( function( root, factory ) {

    if ( typeof define === 'function' && define.amd ) {
        // Asynchronous Module Definition (AMD)
        define( [], factory );

    } else if ( typeof exports === 'object' ) {
        // Node, CommonJS-like
        module.exports = factory();

    } else {
        // Browser globals (root is window)
        root.is = factory();
    }

} ( this, function() {

    'use strict';



    // Variables
    
    var is = {};

    var types = ['Array', 'Boolean', 'Date', 'Function', 'Null', 'Number', 'Object', 'RegExp', 'String', 'Undefined'];



    // Methods
    
    function type() {
        return Object.prototype.toString.call(this).slice(8, -1);
    }

    // Dynamically generate our type checks methods:
    //     |_ is.Array();
    //     |_ is.Boolean();
    //     |_ is.Date();
    //     |_ ...
    for ( var i = 0, len = types.length; i < len; i++ ) {

        is[types[i]] = ( function( self ) {
            return function ( el ) {
                return type.call( el ) === self;
            };
        })(types[i]);
    }



    // Public API
    return is;

}));
