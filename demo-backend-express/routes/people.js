var express = require('express');
var models = require('../models/index');
var router = express.Router();

router.get('/', function(req, res) {    // index
  models.Person.findAll({}).then(function(people){
    res.json(people);
  }, function(err){
    console.error(err);
  });
  // res.send("people#index");
});
router.post('/', function(req, res) {   // create
  models.Person.create(req.body).then(function(person){
    res.json(person);
  }, function(err){
    console.error(err);
  });
  // res.send("people#create");
});
router.get('/:id', function(req, res) { // show
  models.Person.findById(req.params.id).then(function(person){
    res.json(person);
  }, function(err){
    console.error(err);
  });
  // res.send("people#show");
});
router.patch('/:id', function(req, res) { // update
  models.Person.findById(req.params.id).then(function(person){
    person.update(req.body).then(function(){
      res.json(person);
    });
  }, function(err){
    console.error(err);
  });
  res.send("people#update");
});
router.delete('/:id', function(req, res) { // destroy
  models.Person.findById(req.params.id).then(function(person){
    person.destroy().then(function(){
      res.send("Person DESTROYED");
    });
  }, function(err){
    console.error(err);
  });
  // res.send("people#destroy");
});


module.exports = router;
