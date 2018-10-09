var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

require('../data/db/modules.js')(mongoose);
// var company_news = require('./routes/company_news');
// var policy = require('./routes/policy');
// var space = require('./routes/space');
// var industry_news = require('./routes/industry_news');
// var user = require('./routes/user');
// var article_statistics_mini = require('./routes/article_statistics_mini');
// const index = require('./routes/index');
// const users = require('./routes/users');
const city = require('./routes/city');

// module.exports = (app) => {
//   console.log('init URL');
//   app.use('/api/users', users);
//   app.use('/api/city', city);
//   app.use(index);

//   console.log('init URL end');
// };

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/company-news', company_news);
// app.use('/policy', policy);
// app.use('/space', space);
// app.use('/industry-news', industry_news);
// app.use('/article-statistics',article_statistics_mini);
// app.use('/user',user);
// app.use('/',index);
// app.use('/api/users', users);
app.use('/city', city);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
