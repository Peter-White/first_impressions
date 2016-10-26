$(document).ready(function() {
  var reviewAPI = "/reviews";
  var reviewOptions = {
    format: "json"
  };
  function displayReviews(data) {
    var reviewHTML = '<ul type="none">';
    $.each(data, function(i, review) {
      reviewHTML += '<li><h2>' + review.title + '</h2></li>';
      reviewHTML += '<li><p>' + review.content + '</p></li>';
      reviewHTML += '<li><img src="' + review.rating + '" /></li>';
    });
    reviewHTML += '</ul>';
    $('.reviews').html(reviewHTML);
  };
  $.getJSON(reviewAPI, reviewOptions, displayReviews);
});
