var express = require('express');
var router = express.Router();
var Tatum = require ('../models/tatum.js');

// GET ALL
router.get('/tatums', function(req, res, next){
  Tatum.findQ()
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});

// GET ONE
router.get('/tatum/:id', function(req, res, next){
  Tatum.findByIdQ(req.params.id)
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});

// POST ONE
router.post('/tatums', function(req, res, next) {
 new Tatum({
    movies:req.body.movies,
    year:req.body.year,
    chickFlick:req.body.chickFlick
  })
  .saveQ()
    .then(function(result){
      res.json(result)})
    .fail(function(err){
      res.send(err)})
    .done();
});

// PUT ONE
router.put('/tatum/:id', function(req, res, next){
  Tatum.findByIdAndUpdateQ(req.params.id, req.body)
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});

// DELETE ONE
router.delete('/tatum/:id', function(req, res, next){
  Tatum.findByIdAndRemoveQ(req.params.id)
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done();
});


module.exports = router;
