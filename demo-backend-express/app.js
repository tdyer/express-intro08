var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.json());

// GET /
app.use('/', require('./routes/index'));

// people CRUD actions
app.use('/people', require('./routes/people'));
// pets CRUD actions
app.use('/pets', require('./routes/pets'));
// static routes
app.use(express.static('public'));

// Multiple handlers for GET /contacts
app.get('/contacts', function(req, res, next){
  // res.locals is an object that one can add properties to
  // over the course of a HTTP request
  if(!res.locals.contacts){
    res.locals.contacts = [];
  }
  res.locals.contacts.push({
    name: 'David',
    phone: '111-222-3333'
  });
  next(); // go to the next handler
});

app.get('/contacts', function(req, res, next){
  if(!res.locals.contacts){
    res.locals.contacts = [];
  }
  res.locals.contacts.push({
    name: 'Brian',
    phone: '555-444-3333'
  });
  next(); // go to the next handler
});

app.get('/contacts', function(req, res, next){
  if(!res.locals.contacts){
    res.locals.contacts = [];
  }
  res.locals.contacts.push({
    name: 'Jill',
    phone: '589-478-9933'
  });
  next();
});

app.get('/contacts', function(req, res, next){
  res.status(201);
  // terminal handler, will end request processing
  res.json(res.locals.contacts);
});

app.get('/*', function(req, res){
  res.send("Oh, well don't know how to handle this URL!");
});

var port = 8000;
var server = http.createServer(app);
server.listen(port, function(){
  console.log("Server is running on port " + port);
});
    // path = require('path'),
    // cors = require('cors'),
    // bodyParser = require('body-parser'),
    // logger = require('morgan');

// var app = express();


// app.use(logger('combined'));
// app.use(cors());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
// app.use(bodyParser.json());
// app.use('/', require('./routes/index'));
// app.use('/people', require('./routes/people'));
// app.use('/pets', require('./routes/pets'));

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handlers
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.send('error', {
//       message: err.message,
//       error: err
//     });
//   });
// } else if (app.get('env') === 'production') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.send('error', {
//       message: err.message,
//       error: {}             // Don't show error messages in production mode.
//     });
//   });
// }

// module.exports = app;
