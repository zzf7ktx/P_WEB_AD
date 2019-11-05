var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var sportsRouter = require('./routes/sports');
var foodRouter = require('./routes/food');
var fashionRouter = require('./routes/fashion');
var electronicRouter = require('./routes/electronic');
var petRouter = require('./routes/pet');
var homeRouter = require('./routes/home');
var detailRouter = require('./routes/detail');
var stationeryRouter = require('./routes/stationery');
var editAccRouter = require('./routes/edit_acc');
var cartRouter = require('./routes/cart');
var orderRouter = require('./routes/order');
var m_usersRouter = require('./routes/m_users');
var m_shopsRouter = require('./routes/m_shops');
var shopxRouter = require('./routes/shopx');
var editShopRouter = require('./routes/edit_shop');
var newProductRouter = require('./routes/new_product');
var editProductRouter = require('./routes/edit_product');
var m_ordersRouter = require('./routes/m_orders');
var m_statRouter = require('./routes/m_stat');
var m_stat_shopRouter = require('./routes/m_stat_shop');
var m_stat_dateRouter = require('./routes/m_stat_date');
var hbs = require('express-handlebars');
var app = express();

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir:__dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/sports', sportsRouter);
app.use('/food', foodRouter);
app.use('/fashion', fashionRouter);
app.use('/electronic', electronicRouter);
app.use('/pet', petRouter);
app.use('/home', homeRouter);
app.use('/stationery', stationeryRouter);
app.use('/edit_acc', editAccRouter);
app.use('/detail', detailRouter);
app.use('/cart', cartRouter);
app.use('/order', orderRouter);
app.use('/m_users', m_usersRouter);
app.use('/m_shops', m_shopsRouter);
app.use('/shopx', shopxRouter);
app.use('/edit_shop', editShopRouter);
app.use('/new_product', newProductRouter);
app.use('/edit_product', editProductRouter);
app.use('/m_orders', m_ordersRouter);
app.use('/m_stat', m_statRouter);
app.use('/m_stat_shop', m_stat_shopRouter);
app.use('/m_stat_date', m_stat_dateRouter);

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
