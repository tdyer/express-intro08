var express = require('express'),
    path = require('path'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    logger = require('morgan');

var app = express();


app.use(logger('combined'));
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use('/', require('./routes/index'));
app.use('/people', require('./routes/people'));
app.use('/pets', require('./routes/pets'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('error', {
      message: err.message,
      error: err
    });
  });
} else if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('error', {
      message: err.message,
      error: {}             // Don't show error messages in production mode.
    });
  });
}

module.exports = app;
