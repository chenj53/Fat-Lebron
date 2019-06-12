var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const mongoose = require( 'mongoose' );
mongoose.connect( 'mongodb://localhost/skillmastery' );
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected!")
});

const usersController = require('./controllers/userscontrollers')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/about', function(req, res, next) {
  res.render('about');
});

app.use(function(req,res,next){
  console.log("about to look for post routes?!?")
  console.dir(req.headers)
  next()
});

function processFormData(req,res,next){
  res.render('formdata',
    {title:"Form Data",inputEmail4:req.body.inputEmail4, inputPassword4:req.body.inputPassword4, inputAddress:req.body.inputAddress, inputAddress2:req.body.inputAddress2, inputCity:req.body.inputCity, inputState:req.body.inputState, inputZip:req.body.inputZip});
  };

  app.post('/processform', userscontrollers.saveusers);

  app.get('/showusers', userscontrollers.getAllusers);




app.get('/myform', function(req, res, next) {
  res.render('myform',{title:"Form Demo"});
});

app.use(function(req,res,next){
  console.log("about to look for post routes?!?")
  console.dir(req.body)
  next()
});

app.post('/processform', function(req, res, next) {
  console.dir(req.body)
  console.log("req.body.inputAddress = "+req.body.inputAddress)
  res.render('formdata',
  {title:"Form Data",inputEmail4:req.body.inputEmail4, inputPassword4:req.body.inputPassword4, inputAddress:req.body.inputAddress, inputAddress2:req.body.inputAddress2, inputCity:req.body.inputCity, inputState:req.body.inputState, inputZip:req.body.inputZip})
});

// app.use('/', indexRouter);  // this is how we use a router to handle the / path
// but here we are more direct



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
