var models = require('../models/index');

models.Pet.create({
  name: 'Polly',
  species: 'Parrot',
  breed: 'Norweigian Blue'
}).then(function(pet){
  console.log('Created pet ' + pet.name + ', a ' + pet.species + ' (' + pet.breed + ')');
}, function(err){
  console.log(err);
});
