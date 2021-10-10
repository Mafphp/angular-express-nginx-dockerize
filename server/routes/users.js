var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json([{
    username: 'username_1',
    first_name: 'first_name_1',
    surname: 'surname_1'
  },{
    username: 'username_2',
    first_name: 'first_name_2',
    surname: 'surname_2'
  }])
});

module.exports = router;
