'use strict';
var request = require('request');
var url = "https://api.createsend.com/api/v3.1";

exports.listClients = function(req, res) {
  request.get( {
    url : url + "/clients.json",
    headers : {
      "Authorization" : "Basic " + new Buffer(req.headers.username).toString("base64")
    }
  }, function (error, response, body) {
       res.json(body);
     }); 
};

exports.createClient = function(req, res) {
  request.post( {
    url : url + "/clients.json",
    json: req.body,
    headers : {
      "Authorization" : "Basic " + new Buffer(req.headers.username).toString("base64")
    }
  }, function (error, response, body) {
       res.send(body);
     });
};

exports.infoClient = function(req, res) {
 request.get( {
    url : url + "/clients/"+ req.params.clientid + ".json",
    headers : {
      "Authorization" : "Basic " + new Buffer(req.headers.username).toString("base64")
    }
  }, function (error, response, body) {
       res.json(body);
     });
};

exports.listofClient = function(req, res) {
  request.get( {
    url : url + "/clients/"+ req.params.clientid + "/lists.json",
    headers : {
      "Authorization" : "Basic " + new Buffer(req.headers.username).toString("base64")
    }
  }, function (error, response, body) {
       res.json(body);
     }); 
};

exports.deleteClient = function(req, res) {
request.delete( {
    url : url + "/clients/"+ req.params.clientid + ".json",
    headers : {
      "Authorization" : "Basic " + new Buffer(req.headers.username).toString("base64")
    }
  }, function (error, response, body) {
       res.json(response.body);
     }); 
};
