var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('m_stat', { title: 'Statistic' });
});

module.exports = router;
