var db = require('../db');
var objectId = require('mongodb').ObjectID;

exports.all = function(cb) {
    db.get().collection('users').find().toArray(function(err, docs) {
        cb(err, docs);
    });
};

exports.findByLogin = function(user, cb) {
    db.get().collection('users')
        .findOne({ login: user.login, password: user.password }, function(err, docs) {
            cb(err, docs);
        })
};

exports.create = function(user, cb) {
    db.get().collection('users').insert(user, function(err, result) {
        cb(err, result);
    });
};

exports.update = function(id, data, cb) {
    db.get().collection('users').updateOne({ _id: objectId(id) },
        data,
        function(err, result) {
            cb(err, result);
        });
};

exports.delete = function(id, cb) {
    db.get().collection('users').deleteOne({ _id: objectId(id) }, function(err, result) {
        cb(err, result);
    });
}