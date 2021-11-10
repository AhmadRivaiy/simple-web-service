const { customLog } = require('../includes/FungsiBantuan');
var db = require('../models/Connection');

var userDB = {
    getAllUser: function (limit, offset, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                var sql = 'SELECT * FROM users ORDER BY nama_user ASC LIMIT ? OFFSET ?';
                var query = conn.query(sql, [parseInt(limit), parseInt(offset)], function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    } else {
                        return callback(null, result);
                    }
                });
                customLog(query.sql);
            }
        });
    },

    getUser: function (userid, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                var sql = 'SELECT * FROM users WHERE id_users = ?';
                var query = conn.query(sql, [userid], function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    } else {
                        return callback(null, result);
                    }
                });
                customLog(query.sql);
            }
        });
    },

    addUsers: function (data, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                var sql = `INSERT INTO users (nama_user, nrp, email, tanggal_lahir) VALUES ('${data.nama_user}', '${data.nrp}', '${data.email}', '${data.tanggal_lahir}');`;
                var query = conn.query(sql, function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    } else {
                        return callback(null, result);
                    }
                });
                customLog(query.sql);
            }
        });
    },

    deleteUsers: function (data, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                var sql = `DELETE FROM users WHERE id_users = '${data.id_users}';`;
                var query = conn.query(sql, function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    } else {
                        return callback(null, result);
                    }
                });
                customLog(query.sql);
            }
        });
    },

    updateUsers: function (data, callback) {
        var conn = db.getConnection();
        conn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            else {
                var qs = Object.keys(data).map(function (key) {
                    return key + '=' + "'" + data[key] + "'"
                }).join(', ');

                var sql = `UPDATE users SET ${qs} WHERE id_users = '${data.id_users}';`;
                var query = conn.query(sql, function (err, result) {
                    conn.end();
                    if (err) {
                        console.log(err);
                        return callback(err, null);
                    } else {
                        return callback(null, result);
                    }
                });
                customLog(query.sql);
            }
        });
    }
}

module.exports = userDB