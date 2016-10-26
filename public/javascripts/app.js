$(document).ready(function() {
  var $charCount = $('#charCount');
  $('.postReview form').submit(function(event) {
    var check = $charCount.hasClass( 'overLimit' );
    if(check === false) {
      console.log("Yep");
    } else {
      event.preventDefault();
      console.log("Nope")
    }
  });
});
