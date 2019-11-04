var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('m_shops', { title: 'Shop management' });
});

module.exports = router;
