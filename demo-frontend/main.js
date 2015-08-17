
var App = (function(){
  var _sa = "http://localhost:8000";

  var _personIndex = function(){
    $.ajax({
      url: _sa + "/people",
      dataType: 'json'
    }).done(function(people){
      $("#results").html('');
      people.forEach(function(person){
        $("#results").append("<p>id:" + person.id + " -- " + person.firstName + " " + person.lastName + "</p>");
      });
    }).fail(function(err){
      console.error(err);
    });
  };
  var _personCreate = function(data){
    $.ajax({
      url: _sa + "/people",
      method: "POST",
      //// `http`
      dataType: 'json',
      data: JSON.stringify(data)
      //// `express`
      // data: data
    }).done(function(person){
      $("#results").html("<p>id:" + person.id + " -- " + person.firstName + " " + person.lastName + "</p>");
    }).fail(function(err){
      console.error(err);
    });
  };
  var _personShow = function(n){
    $.ajax({
      url: _sa + "/people/" + n,
      dataType: 'json'
    }).done(function(person){
      $("#results").html("<p>id:" + person.id + " -- " + person.firstName + " " + person.lastName + "</p>");
    }).fail(function(err){
      console.error(err);
    });
  };
  var _personUpdate = function(n, data){
    $.ajax({
      url: _sa + "/people/" + n,
      method: "PATCH",
      //// `http`
      dataType: 'json',
      data: JSON.stringify(data)
      //// `express`
      // data: data
    }).done(function(person){
      $("#results").html("<p>id:" + person.id + " -- " + person.firstName + " " + person.lastName + "</p>");
    }).fail(function(err){
      console.error(err);
    });
  };
  var _personDestroy = function(n){
    $.ajax({
      url: _sa + "/people/" + n,
      dataType: 'json',
      method: "DELETE"
    }).done(function(person){
      console.log("Person was deleted")
    }).fail(function(err){
      console.error(err);
    });
  };

  var _petIndex = function(){
    $.ajax({
      url: _sa + "/pets",
      dataType: 'json'
    }).done(function(pets){
      $("#results").html('');
      pets.forEach(function(pet){
        $("#results").append("<p>" + pet.name + " is a " + pet.species + " (" + pet.breed + ")</p>");
      });
    }).fail(function(err){
      console.error(err);
    });
  };
  var _petCreate = function(data){
    $.ajax({
      url: _sa + "/pets",
      method: "POST",
      //// `http`
      dataType: 'json',
      data: JSON.stringify(data)
      //// `express`
      // data: data
    }).done(function(pet){
      $("#results").html("<p>" + pet.name + " is a " + pet.species + " (" + pet.breed + ")</p>");
    }).fail(function(err){
      console.error(err);
    });
  };
  var _petShow = function(n){
    $.ajax({
      url: _sa + "/pets/" + n,
      dataType: 'json'
    }).done(function(pet){
      $("#results").html("<p>" + pet.name + " is a " + pet.species + " (" + pet.breed + ")</p>");
    }).fail(function(err){
      console.error(err);
    });
  };
  var _petUpdate = function(n, data){
    $.ajax({
      url: _sa + "/pets/" + n,
      method: "PATCH",
      //// `http`
      dataType: 'json',
      data: JSON.stringify(data)
      //// `express`
      // data: data
    }).done(function(pet){
      $("#results").html("<p>" + pet.name + " is a " + pet.species + " (" + pet.breed + ")</p>");
    }).fail(function(err){
      console.error(err);
    });
  };
  var _petDestroy = function(n){
    $.ajax({
      url: _sa + "/pets/" + n,
      dataType: 'json',
      method: "DELETE"
    }).done(function(person){
      console.log("Pet was deleted")
    }).fail(function(err){
      console.error(err);
    });
  };

  return {
    personIndex : _personIndex,
    personCreate : _personCreate,
    personShow : _personShow,
    personUpdate : _personUpdate,
    personDestroy : _personDestroy,
    petIndex : _petIndex,
    petCreate : _petCreate,
    petShow : _petShow,
    petUpdate : _petUpdate,
    petDestroy : _petDestroy
  };

})();
