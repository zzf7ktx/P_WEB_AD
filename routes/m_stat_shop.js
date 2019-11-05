var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('m_stat_shop', { title: 'Statistic by shops' });
});

module.exports = router;
