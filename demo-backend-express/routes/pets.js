var express = require('express');
var models = require('../models/index');
var router = express.Router();

router.get('/', function(req, res) {    // index
  models.Pet.findAll({}).then(function(pets){
    res.json(pets);
  }, function(err){
    console.error(err);
  });
  // res.send("pets#index");
});
router.post('/', function(req, res) {   // create
  models.Pet.create(req.body).then(function(pet){
    res.json(pet);
  }, function(err){
    console.error(err);
  });
  // res.send("pets#create");
});
router.get('/:id', function(req, res) { // show
  models.Pet.findById(req.params.id).then(function(pet){
    res.json(pet);
  }, function(err){
    console.error(err);
  });
  // res.send("pets#show");
});
router.patch('/:id', function(req, res) { // update
  models.Pet.findById(req.params.id).then(function(pet){
    pet.update(req.body).then(function(){
      res.json(pet);
    });
  }, function(err){
    console.error(err);
  });
  // res.send("pets#update");
});
router.delete('/:id', function(req, res) { // destroy
  models.Pet.findById(req.params.id).then(function(pet){
    pet.destroy().then(function(){
      res.send("Pet DESTROYED");
    });
  }, function(err){
    console.error(err);
  });
  // res.send("pets#destroy");
});


module.exports = router;
