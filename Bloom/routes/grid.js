var express = require('express');
var router = express.Router();

/* GET grid pattern. */
router.get('/', function(req, res) {
  res.render('grid', { title: 'Grid' });
});

module.exports = router;
