var express = require('express');
var router = express.Router();
var http = require('http');

router.get('/', function (req, res) {
    res.render('dashboard');
});


module.exports = router;
