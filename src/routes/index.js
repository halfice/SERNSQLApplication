"use strict";


const smartapi = require( "./smartapi" );
module.exports.registersmart = async server => {
    await smartapi.registersmart( server );
   server.route( {
       method: "GET",
       path: "/g",
       handler: async ( request, h ) => {
           return "Connected";

       }
   } );
};