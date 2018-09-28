var express = require('express');
var router = express.Router();
var http = require('http');
var fs = require('fs');


router.get('/:id', function (req, res) {
    console.log(req.params);

    var name = '';
    var symbol = '';
    var price = '';
    var percent_change_1h = '';
    var percent_change_24h = '';
    var percent_change_7d = '';

    fs.readFile('readme.txt', 'utf-8', function (err, data) {
        console.log('reading file');
        fs.writeFile('writeme.txt');
    });

    var request = require('request');
    request('https://api.coinmarketcap.com/v1/ticker/' + req.params.id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log('the body is ' + body);
            var jsonObj = JSON.parse(body);

            for (var i = 0; i < jsonObj.length; i++) {
                name = jsonObj[i].name;
                symbol = jsonObj[i].symbol;
                price = jsonObj[i].price_usd;

                percent_change_1h = jsonObj[i].percent_change_1h;
                percent_change_24h = jsonObj[i].percent_change_24h;
                percent_change_7d = jsonObj[i].percent_change_7d;

                //console.log('the symbol is = ' + symbol);
                //console.log('the name is = ' + name);
                //console.log('the price is = ' + price); 

            }

            // I HAVE TO PUT THIS CALL IN HERE - AS IT IS FOR CALLBACK
            res.render('crypto', {
                symbol: req.params.id,
                price: price,
                percent_change_1h: percent_change_1h,
                percent_change_24h: percent_change_24h,
                percent_change_7d: percent_change_7d

            });
        }
    });

});

module.exports = router;
