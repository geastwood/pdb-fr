var http = require('http');
var key = 'pdb', passowrd ='pdbuser';
var express = require('express');
var router = express.Router();

router.get('/', function(req, responds) {
  var data = '';
  http.get({
    host: '81.88.24.55',
    port: '8080',
    path: '/article',
    headers: {
      'Authorization': 'Basic ' + new Buffer(key + ':' + passowrd, 'utf8').toString('base64')
    }
  }, function(res) {
    res.on('data', function(chunk) {
      data = data + chunk;
    });
    res.on('end', function() {
      responds.send(JSON.parse(data));
    });
  });
});

module.exports = router;

