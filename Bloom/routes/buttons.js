var express = require('express');
var router = express.Router();

/* GET buttons pattern. */
router.get('/', function(req, res) {
  res.render('buttons', { title: 'Buttons' });
});

module.exports = router;
