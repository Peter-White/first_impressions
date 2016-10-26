$(document).ready(function() {
  var $charCount = $('#charCount');

  $('.postReview form').submit(function(event) {
    var check = $charCount.hasClass( 'overLimit' );
    var input = $('.postReview input').val().length;
    var box = $('.postReview textarea').val().length;

    if(check === false && input > 0 && box > 0) {
      console.log("Yep");
    } else {
      event.preventDefault();
      console.log("Nope")
    }
  });
});
