"use strict";
const sql = require("mssql");
const smartentity = require("./smartentity");
const client = async (server, config) => {
    let pool = null;
    const closePool = async () => {
        try {
            await pool.close();
            pool = null;
        } catch (err) {
            pool = null;
            server.log(["error", "data"], "closePool error");
            server.log(["error", "data"], err);
            console.log(err);
        }
    };

    const getConnection = async () => {
        try {

            if (pool) {
                return pool;
            }
            pool = await sql.connect(config);
            pool.on("error", async err => {
                server.log(["error", "data"], "connection pool error");
                server.log(["error", "data"], err);
                await closePool();
            });
            return pool;
        } catch (err) {
            pool = null;
            console.log("Getting connection" + err);
        }
    };

    return {
        smartentity: await smartentity.register({ sql, getConnection })

    };
};
module.exports = client;












