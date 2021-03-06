const parseJson = require('parse-json');
const path = require('path');
var cors = require('cors')

"use strict";
module.exports.registersmart = async server => {
    server.route({
        method: "GET",
        path: "/smartapi/smart",
        config: {
            auth: 'jwt',
            cors: {
                origin: ['*'],
                additionalHeaders: ['cache-control', 'x-requested-with']
            }
        },
        handler: async request => {
            try {
                // get the sql client registered as a plugin
                var id = request.params.id;
                return "Response";
            } catch (err) {
                console.log(err);
            }
        }
    });

    server.route({
        method: "GET",
        path: "/smartapi/status",
        config: {
            auth: false,
            cors: {
                origin: ['*'],
                additionalHeaders: ['cache-control', 'x-requested-with']
            }
        },
        handler: async request => {
            try {
                return "Response : 200 OK"
            } catch (err) {
                console.log(err);
            }
        }
    });


    server.route({
        method: "GET",
        path: "/smartapi/sms/{Id}",
        config: {
            auth: false,
            cors: {
                origin: ['*'],
                additionalHeaders: ['cache-control', 'x-requested-with']
            }
        },
        handler: async (request, res) => {
            try {
                const id = request.params.Id;
                const db = request.server.plugins.sql.client;
                const res = await db.smartentity.getUsers(id,"");
                console.log(res);
                return res;
               // const json = res.recordsets[0][0].Data;
                //return res.recordsets;

            } catch (err) {
                console.log(err);
            }
        }

    });


    server.route({
        method: ['POST', 'PUT'],
        path: "/smartapi/ups/",
        config: {
            auth: false,
            cors: {
                origin: ['*'],
                additionalHeaders: ['cache-control', 'x-requested-with']
            }
        },
        handler: async (request, res) => {
            try {
               // console.log(request);
                const payload = request.payload;
                //console.log("This is Id "+payload.Id);
                //console.log("This is StepId "+payload.stepid);
                //console.log("This is NameCaption "+payload.stepnamecaption);
                //console.log("This is CpationOnly "+payload.stepcaption);
                const db = request.server.plugins.sql.client2;
                const res = await db.smartentity.getUsers(payload.Id,payload.Data,payload.stepid,payload.stepnamecaption,payload.stepcaption);
                console.log(res);
                const json = res.recordsets[0][0].Data;
                return res.recordsets;

            } catch (err) {
                console.log(err);
            }
            return request;
        }

    });



};//end of class

