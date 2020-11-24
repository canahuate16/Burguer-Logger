// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burguer = {
  all: function(cb) {
    orm.all("burguers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burguers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burguers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burguers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burguerController.js).
module.exports = burguer;
