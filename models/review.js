var mongoose = require('mongoose');
var autopopulate = require('mongoose-autopopulate');

var reviewSchema = new mongoose.Schema({
  title: String,
  content: String,
  created_at: { type: Date },
  rating: Number
});

reviewSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

var Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
