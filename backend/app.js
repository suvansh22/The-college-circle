var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db = require('./routes/mongodb')
var bodyParser = require('body-parser')
var backendrouter = require('./routes/router')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cors = require('cors')

var app = express();

// require('./routes/schema/collegeregistrationschema')
// require('./routes/schema/staffregistrationschema')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

db.on('error',console.error.bind(console,'MongoDB connection error:'))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())
app.use('/database',backendrouter)
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
