var async = require('async');
var models = require('../models/index');

async.series([
  function(done){ //  Clear out database;
    async.series([
      function(done){
        models.Pet.destroy({where: {}}).then(done);
      },
      function(done){
        models.Person.destroy({where: {}}).then(done);
      }
    ], function(err, result) {
      if (err) console.error(err);
      console.log("Database emptied.");
      done();
    });
  },
  function(done){ //  Add seed data.
    models.Person.create({
      firstName: "John",
      lastName: "Doe"
    }).then(function(person){
      async.parallel([
        function(done){
          models.Pet.create({
            name: "Lassie",
            species: "dog",
            breed: "Rough Collie",
            personId: person.id
          }).then(done);
        },
        function(done){
          models.Pet.create({
            name: "Beethoven",
            species: "dog",
            breed: "St. Bernard",
            personId: person.id
          }).then(done);
        },
        function(done){
          models.Pet.create({
            name: "Ren",
            species: "dog",
            breed: "Chihuahua",
            personId: person.id
          }).then(done);
        }
      ], function(err, results){
        console.log("Created one person with three associated pets.")
        done();
      });
    });
  }
], function(err, results){
  console.log("Database seeded successfully.");
  // models.Person.find({where: {firstName: "John", lastName: "Doe"} }).then(function(person){
  //   person.getPets().then(function(pets){
  //     pets.forEach(function(pet){
  //       console.log(pet.name);
  //     });
  //   });
  // });
});

debugger;
