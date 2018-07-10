const express = require('express');
const bodyPraser = require('body-parser');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('', { title: 'Express'})
})

router.get('/test', function(req,res,next){
  res.render('test')
})

router.post('/test', function(req,res,next){
  res.render('test', {data:req.body})
})

router.post('/', function(req,res,next){
  res.render('', {title: 'Express', data: req.body})
})

module.exports = router;
