var express = require ('express');
var app = express();
var router = express.Router();

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get ('/', function (req, res) {
  res.send('Hello World')
})

router.get('/about', function (req, res) {
  res.send('About me')
})



module.exports = router;