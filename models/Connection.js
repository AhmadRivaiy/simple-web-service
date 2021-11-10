var mysql = require('mysql');
var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "uji_web_service"
        });
        return conn;
    }
};

module.exports = dbconnect;
