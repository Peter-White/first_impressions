$(document).ready(function() {

  var qualityCheck = function(photo) {
    if(photo === './images/thumbsup.png') {
      return "good"
    } else if(photo === './images/thumbsdown.png') {
      return "bad"
    }
    else {
      return "average"
    }
  };

  var reviewAPI = "/reviews";
  var reviewOptions = {
    format: "json"
  };
  function displayReviews(data) {
    var reviewHTML = '<div class="reviews">';
    $.each(data, function(i, review) {
      reviewHTML += '<ul type="none" id="' + review._id + '" class=' + qualityCheck(review.rating) + '>';
      reviewHTML += '<li><img src="' + review.rating + '" height="70" id="thumb"/></li>';
      reviewHTML += '<li><h2 id="title">' + review.title + '</h2></li>';
      reviewHTML += '<li><p id="review">' + review.content + '</p></li>';
      reviewHTML += '</ul>';
      reviewHTML += '<br>';
    });
    reviewHTML += '</div>';
    $('.container').append(reviewHTML);
  };
  $.getJSON(reviewAPI, reviewOptions, displayReviews);
});
