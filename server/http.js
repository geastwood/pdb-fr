var http = require('http');
var data = '';
var key = 'pdb', passowrd ='pdbuser';
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
    console.log(data);
  });
});
