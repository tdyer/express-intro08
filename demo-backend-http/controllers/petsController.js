'use strict';

// we import our mongoose model here
var models = require('../models/index');

//we import our application controller here
var ApplicationController = require('./applicationController');

var PetsController = function(response, uri){
  ApplicationController.apply(this, arguments);
};

PetsController.prototype = new ApplicationController();

PetsController.prototype.setPet = function(action){
  models.Pet.findById(this.params['petId']).then(function(pet){
    action(pet);
  }, function(err){
    self.renderError(err);
  });
}

PetsController.prototype.index = function(){
  var self = this;
  models.Pet.findAll({}).then(function(pets){
    self.render(pets);
  }, function(err){
    self.renderError(err);
  });
}

PetsController.prototype.show = function(){
  var self = this;
  this.setPet(function(pet){
    self.render(pet);
  });
}

PetsController.prototype.destroy = function(){
  var self = this;
  this.setPet(function(pet){
    pet.destroy().then(function(){
      self.head();
    }, function(err){
      self.renderError(err);
    });
  })
}

PetsController.prototype.update = function(request){
  var self = this;
  this.setPet(function(pet){
    self.gatherRequest(request, function(petData){
      pet.update(petData).then(function(pet){
        self.render(pet);
      }, function(err){
        self.renderError(err);
      })
    });
  });
}

PetsController.prototype.create = function(request){
  var self = this;
  self.gatherRequest(request, function(pet){
    models.Pet.create(pet).then(function(pet){
      self.render(pet);
    }, function(err){
      self.renderError(err);
    });
  });
}


module.exports = PetsController;
