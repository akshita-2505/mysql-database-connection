'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    port : 8889,
    password : 'root',
    database : 'registration'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;