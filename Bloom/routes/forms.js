var express = require('express');
var router = express.Router();

/* GET forms pattern. */
router.get('/', function(req, res) {
  res.render('forms', { title: 'Forms' });
});

module.exports = router;
