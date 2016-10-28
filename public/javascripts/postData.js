$(document).ready(function() {
  var reviewAPI = "/reviews";
  var reviewOptions = {
    format: "json"
  };
  function displayReviews(data) {
    var reviewHTML = '<div class="reviewContainer">';
    $.each(data, function(i, review) {
      reviewHTML += '<ul type="none" id="' + review._id + '">';
      reviewHTML += '<li><h2>' + review.title + '</h2></li>';
      reviewHTML += '<li><p>' + review.content + '</p></li>';
      reviewHTML += '<li><img src="' + review.rating + '" height="70"/></li>';
      reviewHTML += '<li><p>Posted On: ' + review.created_at + '</p></li>'
      reviewHTML += '</ul>';
    });
    reviewHTML += '</div>';
    $('.reviews').html(reviewHTML);
  };
  $.getJSON(reviewAPI, reviewOptions, displayReviews);
});
