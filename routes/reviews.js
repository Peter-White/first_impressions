var express = require('express');
var router = express.Router();
var Review = require('../models/review');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Review.find({}, function(error, reviewList) {
    res.json(reviewList);
  });
});

router.get('/:id', function(req, res) {
  Review.find({
    _id: req.params.id
  }, function(error, post) {
    res.json(post);
  });
});

router.post('/', function(req, res) {
  console.log(req.body);
  Review.create({
    content: req.body.content,
    created_at: req.body.created_at,
    rating: req.body.rating
  }, function(error) {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else {
      res.sendStatus(204);
    }
    });
});

router.patch('/:id', function(req, res) {
  Review.findByIdAndUpdate(req.params.id, req.body, {
    overwrite: false
  }, function(error, post) {
    if (error) {
      console.error(error);
      res.sendStatus(400);
    }
    console.log('Changed')
    res.sendStatus(200);
  });
});

router.delete('/:id', function(req, res) {
  Review.remove({
    _id: req.params.id
  }, function(error) {
    if (error) {
      console.log(error);
      res.sendStatus(400);
    } else {
      res.sendStatus(204);
    }
  });
});

module.exports = router;
