var express = require('express');
var router = express.Router();

/* GET media pattern. */
router.get('/', function(req, res) {
  res.render('media', { title: 'Media' });
});

module.exports = router;
