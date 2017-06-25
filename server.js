var express = require('express'),
  router = express.Router(),
  request = require('request'),
  app = express();
var bodyParser = require('body-parser');
var username = "9dc36f5f27e7606f49eaadc12c857d4f",
  url = "https://api.createsend.com/api/v3.1",
  auth = "Basic " + new Buffer(username).toString("base64");

app.get('/clients', function(req, res) {
  request.get( {
    uri : url + "/clients.json",
    headers : {
      "Authorization" : auth
    }
  }, function (error, response, body) {
      res.json(body);
     }); 
});

app.get('/clients/:clientid', function(req, res) {
  request.get( {
    uri : url + "/clients/"+ req.params.clientid + ".json",
    headers : {
      "Authorization" : auth
    }
  }, function (error, response, body) {
      res.json(body);
     }); 
});

app.get('/clients/:clientid/lists', function(req, res) {
  request.get( {
    uri : url + "/clients/"+ req.params.clientid + "/lists.json",
    headers : {
      "Authorization" : auth
    }
  }, function (error, response, body) {
      res.json(body);
     }); 
});

app.delete('/clients/:clientid', function(req, res) {
  request.delete( {
    uri : url + "/clients/"+ req.params.clientid + ".json",
    headers : {
      "Authorization" : auth
    }
  }, function (error, response, body) {
      res.json(response.body);
     }); 
});

app.post('/clients',bodyParser.json(), function(req, res) {
  request.post( {
    uri : url + "/clients.json",
    json: req.body,
    headers : {
      "Authorization" : auth
    }
  }, function (error, response, body) {
        res.send(body);
     }); 
});

var server = app.listen(3000, function () {
var host = server.address().address
var port = server.address().port

console.log("Example app listening at http://%s:%s", host, port)
});
