'use strict';

// we import our mongoose model here
var models = require('../models/index');

//we import our application controller here
var ApplicationController = require('./applicationController');

var PeopleController = function(response, uri){
  ApplicationController.apply(this, arguments);
};

PeopleController.prototype = new ApplicationController();

PeopleController.prototype.setPerson = function(action){
  models.Person.findById(this.params['personId']).then(function(person){
    action(person);
  }, function(err){
    self.renderError(err);
  });
}

PeopleController.prototype.index = function(){
  var self = this;
  models.Person.findAll({}).then(function(people){
    self.render(people);
  }, function(err){
    self.renderError(err);
  });
}

PeopleController.prototype.show = function(){
  var self = this;
  this.setPerson(function(person){
    self.render(person);
  });
}

PeopleController.prototype.destroy = function(){
  var self = this;
  this.setPerson(function(person){
    person.destroy().then(function(){
      self.head();
    }, function(err){
      self.renderError(err);
    });
  })
}

PeopleController.prototype.update = function(request){
  var self = this;
  this.setPerson(function(person){
    self.gatherRequest(request, function(personData){
      person.update(personData).then(function(person){
        self.render(person);
      }, function(err){
        self.renderError(err);
      })
    });
  });
}

PeopleController.prototype.create = function(request){
  var self = this;
  self.gatherRequest(request, function(person){
    models.Person.create(person).then(function(person){
      self.render(person);
    }, function(err){
      self.renderError(err);
    });
  });
}


module.exports = PeopleController;
