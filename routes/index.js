var express = require('express');
var router = express.Router();
var http = require('http');

router.get('/', function (req, res) {
    console.log('INDEX ***** ');
});


module.exports = router;
