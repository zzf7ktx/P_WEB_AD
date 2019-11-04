var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('m_orders', { title: 'Orders management' });
});

module.exports = router;
