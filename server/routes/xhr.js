var http = require('http');
var express = require('express');
var router = express.Router();
var get = require('../application/request');
var dummyAuthorData = require('../data/author.json');

// temp, dummy, todo
var findAuthorById = (function(authors) {
  return function(id) {
    return authors.filter(function(item) {
      return Number(item.author.id) === Number(id);
    });
  };
})(dummyAuthorData.data);

router.get('/article', function(req, res) {
  get({
    path: '/article?limit=50'
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

router.get('/author/:id', function(req, res) {
  setTimeout(function() {
    res.send(findAuthorById(req.params.id)[0] || {success: false});
  }, 800);
});

module.exports = router;
