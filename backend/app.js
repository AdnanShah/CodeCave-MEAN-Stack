const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
var cors = require('cors');
const configFile = require('./config/configuration');

require('./config/database');
const expressValidator = require('express-validator');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('superSecret', configFile.secret);

app.get('/table', function(req, res) {
	res.render('viewUsers');
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({limit:'50mb',extended:true}));
app.use(expressValidator());
app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join('config')));


// HTTP routes
routes.router(app);
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
      console.log(err);
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
process.on('uncaughtException',  (error) => {
  console.log(error.stack);
});
module.exports = app;
