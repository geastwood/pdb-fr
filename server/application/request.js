var configs = require('../config/config');
var http = require('http');
var _ = require('lodash');

var get = function(opts, fn) {
  var data = '';
  http.get(_.assign({
    host: configs.host,
    port: configs.port,
    path: '/',
    headers: {
      'Authorization': 'Basic ' + new Buffer(configs.username + ':' + configs.password, 'utf8').toString('base64')
    }
  }, opts), function(res) {
    res.on('data', function(chunk) {
      data = data + chunk;
    });
    res.on('end', function() {
      console.log(data);
      fn(data);
    });
  });
};

module.exports = get;
