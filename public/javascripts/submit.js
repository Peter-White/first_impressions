$(document).ready(function() {
  var $charCount = $('#charCount');
  var $toggle = $('.toggle');
  var $postReview = $('.postReview');
  var $input = $('.postReview input');
  var $box = $('.postReview textarea');
  var $status = $('#status');

  $postReview.hide();

  $toggle.click(function() {
    $postReview.slideToggle( "slow" );
  });

  $('.postReview form').submit(function(event) {
    var check = $charCount.hasClass( 'overLimit' );

    if(check === false && $input.val().length > 0 && $box.val().length > 0) {
      console.log("Yep");
      $status.html("Success!");
    } else {
      event.preventDefault();
      var errorHTML = "<ul>";
      if (check !== false) {
        errorHTML +=  "<li>Maximum Character Length Exceded</li>";
      }
      if ($input.val().length === 0) {
        errorHTML += "<li>No Title Given</li>";
      }
      if ($box.val().length === 0) {
        errorHTML += "<li>Review Is Empty</li>";
      }
      errorHTML += "</ul>";
      $status.html(errorHTML);
    }
  });
});
