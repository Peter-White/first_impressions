$(document).ready(function() {
  var $charCount = $('#charCount');
  var $titleCount = $('#titleCount');
  var $toggle = $('.toggle');
  var $postReview = $('.postReview');
  var $input = $('.postReview input');
  var $box = $('.postReview textarea');
  var $status = $('#status');
  var $reviews = $('.reviews');

  // Adds a class to ul objects
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

  // Checks value of radio buttons
  var thumbCheck = function() {
    var $good = $("#good");
    var $bad = $("#bad");
    var $average = $("#average");

    if ($good.is(':checked')) {
      return $good.val();
    }
    else if ($bad.is(':checked')) {
      return $bad.val();
    }
    else if ($average.is(':checked')) {
      return $average.val();
    }
    else {
      console.log(error);
    }
  };

  // Checks for duplicate reviews


  $postReview.hide();

  $toggle.click(function() {
    $postReview.slideToggle( "slow" );
  });

  $('.postReview form').submit(function(event) {
    var reviewCheck = $charCount.hasClass( 'overLimit' );
    var titleCheck = $titleCount.hasClass( 'overLimit' );
    event.preventDefault();

    if(reviewCheck === false && titleCheck === false && $input.val().length > 0 && $box.val().length > 0) {
      $status.removeClass('error');
      $status.addClass('success');
      $status.html("Success!");
      $.post('/reviews', {title: $input.val(), content: $box.val(), rating: thumbCheck()}, function(response,status) {
        $input.val('');
        $box.val('');
      }, 'json');
    } else {
      $status.removeClass('success');
      $status.addClass('error');
      var errorHTML = "<ul>";
      if (reviewCheck !== false) {
        errorHTML +=  "<li>Maximum Character Length Of Review Exceded</li>";
      }
      if (titleCheck !== false) {
        errorHTML +=  "<li>Maximum Character Length Of Title Exceded</li>";
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
