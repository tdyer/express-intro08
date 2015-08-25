var express = require('express');
var util = require('util');
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

// curl -H "Accept: application/json" -H "Content-type: application/json" -d '{"firstName":"Tom","lastName":"Dyer"}' http://localhost:8000/people
router.post('/', function(req, res) {   // create
  console.log("body is " + util.inspect(req.body));
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
