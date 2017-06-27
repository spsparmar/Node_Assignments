'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListControllers');

  app.route('/clients')
   .get(todoList.listClients)
   .post(todoList.createClient);

  app.route('/clients/:clientid')
   .get(todoList.infoClient)
   .delete(todoList.deleteClient);

  app.route('/clients/:clientid/lists')
   .get(todoList.listofClient);
};
