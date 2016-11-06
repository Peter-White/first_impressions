$(document).ready(function() {

  var qualityCheck = function(photo) {
    if(photo === './images/thumbsup.png') {
      return "good"
    } else if(photo === './images/thumbsdown.png') {
      return "bad"
    }
    else if(photo === './images/thumbsside.png') {
      return "average"
    }
    else {
      return 'error'
    }
  };

  var reviewAPI = "/reviews";
  var reviewOptions = {
    format: "json"
  };
  function displayReviews(data) {
    var reviewArray = [];
    for(var i = data.length - 1; i >= 0; i--) {
      reviewArray.push(data[i]);
    }
    var reviewHTML = '<div class="reviews">';
    $.each(reviewArray, function(i, review) {
      reviewHTML += '<ul type="none" id="' + review._id + '" class=' + qualityCheck(review.rating) + '>';
      reviewHTML += '<li><img src="' + review.rating + '" id="thumb"/></li>';
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
