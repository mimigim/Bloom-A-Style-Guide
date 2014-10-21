var express = require('express');
var router = express.Router();

/* GET type pattern. */
router.get('/', function(req, res) {
  res.render('type', { title: 'Type' });
});

module.exports = router;
