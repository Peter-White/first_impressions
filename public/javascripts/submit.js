$(document).ready(function() {
  var $charCount = $('#charCount');
  var $toggle = $('.toggle');
  var $postReview = $('.postReview');
  var $input = $('.postReview input');
  var $box = $('.postReview textarea');

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

    if(check === false && $input.val().length > 0 && $box.val().length > 0) {
      console.log("Yep");
      $input.val('');
      $box.val('');
    } else {
      event.preventDefault();
      console.log("Nope")
    }
  });
});
