const mariadb = require('mysql');

const conn = mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'hospital',
    port: 3306,
});

module.exports = conn;