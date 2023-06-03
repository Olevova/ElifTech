const { Pool } = require('pg');
require('dotenv').config();

// const password = process.env.PASSWORD;
// const dbName = process.env.DBNAME;
// console.log(password, dbName );

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'resturan',
    password: 'home',
    port: 5432
});

module.exports = {
    query: (text, params) => {
    return pool.query(text, params);
    }
};
