const express = require('express');
const router = express.Router();
var user = require('../controllers/Users');
const { filterObj } = require('../includes/FungsiBantuan');

router.get('/get-all-user', (req, res, next) => {
    var offset = req.query.offset;
    var limit = req.query.limit;
    if(!offset){
        offset = 0;
    }
    if(!limit){
        limit = 100;
    }
    user.getAllUser(limit, offset, function (err, result) {
        if (!err) {
            res.send({
                message: 'Get All User',
                data: result
            })
        }else{
            res.status(500).send({
                data: err
            });
        }
    });
});

router.get('/get-user/:id_user', (req, res, next) => {
    var id = req.params.id_user;
    if(!id){
        res.status(422).send({
            message: 'ID User Diperlukan'
        })
    }

    user.getUser(id, function (err, result) {
        if (!err) {
            res.send({
                message: 'Berhasil Mengambil User!',
                data: result
            })
        }else{
            res.status(500).send({
                data: err
            });
        }
    });
});

router.post('/tambah-user', (req, res, next) => {
    var data = {
        nama_user: req.body.nama_user,
        nrp: req.body.nrp,
        email: req.body.email,
        tanggal_lahir: req.body.tanggal_lahir
    }

    user.addUsers(data, function (err, result) {
        if (!err) {
            res.send({
                message: 'Berhasil Menambah User!',
                data: result
            })
        }else{
            res.status(500).send({
                data: err
            });
        }
    });
});

router.put('/update-user', (req, res, next) => {
    const allowed = ['id_users', 'nama_user', 'nrp', 'email', 'tanggal_lahir'];
    const filtered = filterObj(req.body, allowed);

    if(!req.body){
        res.status(422).send({
            message: 'Data Diperlukan!'
        })
    }else{
        if(!req.body.id_users){
            res.status(422).send({
                message: 'ID User Diperlukan!'
            })
        }else{
            user.updateUsers(filtered, function (err, result) {
                if (!err) {
                    res.send({
                        message: 'Berhasil Update User!',
                        data: result
                    })
                }else{
                    res.status(500).send({
                        data: err
                    });
                }
            });
        }
    }
});

router.delete('/delete-user/:id_users', (req, res, next) => {
    var data = {
        id_users: req.params.id_users
    }

    user.deleteUsers(data, function (err, result) {
        if (!err) {
            res.send({
                message: 'Berhasil Delete User!',
                data: result
            })
        }else{
            res.status(500).send({
                data: err
            });
        }
    });
});

module.exports = router;