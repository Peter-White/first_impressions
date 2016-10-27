$(document).ready(function() {
  var $charCount = $('#charCount');
  var $toggle = $('.toggle');
  var $postReview = $('.postReview');

  $postReview.hide();

  $toggle.click(function() {
    if ( $postReview.is( ":hidden" ) ) {
      $postReview.slideDown( "slow" );
    } else {
      $postReview.slideUp( "slow" );
    }
  });

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
