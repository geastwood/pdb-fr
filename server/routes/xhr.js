var http = require('http');
var express = require('express');
var router = express.Router();
var get = require('../application/request');

router.get('/article', function(req, res) {
  get({
    path: '/article'
  }, function(data) {
    res.send(JSON.parse(data));
  })
});

router.get('/article/:id', function(req, res) {
  get({
    path: '/article/' + req.params.id
  }, function(data) {
    res.send(JSON.parse(data));
  })
});

module.exports = router;
