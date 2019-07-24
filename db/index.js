const {db} = require('../config');
const mysql = require('mysql');
const connection = mysql.createConnection(db);

connection.connect((error) => {
    if (error) {
        return console.log('error connecting to mysql', error);
    }
    console.log('connected to mysql');
});

module.exports = connection;
