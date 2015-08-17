var http = require('http'),
    url = require('url');

var port = 8000;

var ApplicationController = require('./controllers/applicationController');
var PeopleController = require('./controllers/peopleController');
var PetsController = require('./controllers/petsController');

var db = require('./models/index');

var server = http.createServer(function(request, response){

  var uri = url.parse(request.url, true);
  if (uri.pathname === '/people') {
    var peopleController = new PeopleController(response, uri);
    switch(request.method) {
      case "GET":
        console.log("/people :: GET");
        peopleController.index();
        break;
      case "POST":
        peopleController.create(request);
        break;
      case "OPTIONS":
        peopleController.handleOptions();
        break;
      default:
        peopleController.render404();
        break;
    }
  } else if (uri.pathname.match(/\/people\/\d+/)) {
    var peopleController = new PeopleController(response, uri);
    switch(request.method) {
      case "GET":
        peopleController.show(request);
        break;
      case "PATCH":
        peopleController.update(request);
        break;
      case "DELETE":
        peopleController.destroy(request);
        break;
      case "OPTIONS":
        peopleController.handleOptions();
        break;
      default:
        peopleController.render404();
        break;
    }
  } else if (uri.pathname === '/pets') {
    var petsController = new PetsController(response, uri);
    switch(request.method) {
      case "GET":
        petsController.index();
        break;
      case "POST":
        petsController.create(request);
        break;
      case "OPTIONS":
        petsController.handleOptions();
        break;
      default:
        petsController.render404();
        break;
    }
  } else if (uri.pathname.match(/\/pets\/\d+/)) {
    var petsController = new PetsController(response, uri);
    switch(request.method) {
      case "GET":
        petsController.show();
        break;
      case "PATCH":
        petsController.update(request);
        break;
      case "DELETE":
        petsController.destroy();
        break;
      case "OPTIONS":
        petsController.handleOptions();
        break;
      default:
        petsController.render404();
        break;
    }
  } else {
    var applicationController = new ApplicationController(response, uri);
    applicationController.render404();
  }
});

server.listen(port, function(){
  console.log("'http' server is live on port " + port);
})
