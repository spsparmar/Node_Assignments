var express = require('express'),
  router = express.Router(),
  request = require('request'),
  app = express(),
  bodyParser = require('body-parser'),
  port = 3000;

app.use(bodyParser.json());
var routes = require('./api/routes/todoListRoutes');
routes(app);
app.listen(port);
