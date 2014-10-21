var express = require('express');
var router = express.Router();

/* GET nav pattern. */
router.get('/', function(req, res) {
  res.render('nav', { title: 'Navigation' });
});

module.exports = router;
