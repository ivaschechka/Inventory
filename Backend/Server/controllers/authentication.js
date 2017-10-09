var Authentication = require('../models/authentication');
var md5 = require('md5');
exports.all = function(req, res) {
    Authentication.all(function(err, docs) {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        req.session.authorized = false;
        return res.json(docs);
    });
};

exports.findByLogin = function(req, res) {
    var user = {
        login: req.body.login,
        password: md5(req.body.password).toString()
    };

    Authentication.findByLogin(user, function(err, docs) {
        if (err) {
            console.log(err);
            req.session.authorized = false;
            return res.sendStatus(500);
        }
        if (docs != null)
            req.session.authorized = true;
        else
            req.session.authorized = false;
        return res.json(docs);
    });
};

exports.create = function(req, res) {
    if (!req.body)
        res.sendStatus(400);
    var enc = md5(req.body.password);
    var user = {
        login: req.body.login,
        email: req.body.email,
        password: enc.toString()
    }
    Authentication.create(user, function(err, docs) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        req.session.authorized = true;
        res.sendStatus(200);
    });
};

exports.update = function(req, res) {
    var category = {
        name: req.body.name,
        products: req.body.products,
        imgPath: req.body.imgPath
    };
    Authentication.update(req.params.id, category, function(err, result) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.json(category);
    });
};

exports.delete = function(req, res) {
    Authentication.delete(req.params.id, function(err, result) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}