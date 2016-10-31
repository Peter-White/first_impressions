$(document).ready(function() {
  var reviewAPI = "/reviews";
  var reviewOptions = {
    format: "json"
  };
  function displayReviews(data) {
    var reviewHTML = '<div class="reviews">';
    $.each(data, function(i, review) {
      reviewHTML += '<ul type="none" id="' + review._id + '">';
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
