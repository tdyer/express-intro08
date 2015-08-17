var models = require('../models/index');

models.Person.create({
  firstName: 'John',
  lastName: 'Cleese'
}).then(function(person){
  console.log('Created person ' + person.firstName + ' ' + person.lastName + '.');
}, function(err){
  console.log(err);
});
