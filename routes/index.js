var express = require('express');
var router = express.Router();
var http = require('http');

var name = '';
var age = '';
var title = '';

router.get('/', function (req, res) {
    res.render('index', {
        title: 'CryptoLand',
        name: 'Thomas',
        age: '42'
    });
    //console.log('INDEX ***** ');
});


module.exports = router;
