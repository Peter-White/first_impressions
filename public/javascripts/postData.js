$(document).ready(function() {
  var reviewAPI = "/reviews";
  var reviewOptions = {
    format: "json"
  };
  function displayReviews(data) {
    var reviewHTML = '<ol>';
    $.each(data, function(i, review) {
      reviewHTML += '<li><h2>' + review.title + '</h2></li>';
      reviewHTML += '<li><p>' + review.content + '</p></li>';
      reviewHTML += '<li><p>' + review.rating + '</p></li>';
    });
    reviewHTML += '</ol>';
    $('.reviews').html(reviewHTML);
  };
  $.getJSON(reviewAPI, reviewOptions, displayReviews);
});
