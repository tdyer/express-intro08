"use strict";

var Sequelize = require('sequelize');
var sequelize = new Sequelize('express_demo', 'express_demo_user', 'yellowpencil', {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

// Add models.
var models = {};
models.Person = sequelize.import('./person.js');
models.Pet = sequelize.import('./pet.js');

// Create associations.
Object.keys(models).forEach(function(modelName) {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

sequelize.sync();
module.exports = models;
